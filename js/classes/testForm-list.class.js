class TestFormList extends List {

  constructor(items){
    super(TestForm,items);
    this.db.createTableIfNeeded();
  }

  writeToDb(callback){
    var co = 0, listLength = this.length;
    function callbackEach(res){
      co++;
      if(co == listLength){ callback(); }
    }
    for(let testForm of this){
      testForm.insertInDb(callbackEach);
    }
  }

  readAllFromDb(callback){
    this.db.readAll((data)=>{
      this.push.apply(this,data);
      callback();
    });
  }

  readAllFromDBWithQuestions(callback){
    this.db.readAllWithQuestions((data)=>{
      console.log(data);

      // collect all tests in a new array
      var testFormById = {};
      for(let item of data){

        // create tests and store by id
        testFormById[item.idTest] = testFormById[item.idTest] || {
          idTest: item.idTest,
          name: item.name,
          description: item.description,
          question: []
        }
        // add the current question
        if(item.questionId){
          testFormById[item.idTest].question.push({
            idQuestion: item.idQuestion,
            question: item.question,
            imgURL: item.imgURL
          });
        }

      }

      // Loop through testFormById
      // and push the testform to this list
      for(let idTest in testFormById){
        this.push(testFormById[idTest]);
      }

      callback();
    });
  }

  static get sqlQueries(){
    return {
      createTableIfNeeded: `
        CREATE TABLE IF NOT EXISTS test (
        idTest int(11) NOT NULL AUTO_INCREMENT,
        name varchar(45) DEFAULT NULL,
        description varchar(99) DEFAULT NULL,
        PRIMARY KEY (idTest) )
      `,
      readAll: `
        SELECT * FROM test
      `
    }
  }

}