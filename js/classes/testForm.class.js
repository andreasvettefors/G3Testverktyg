class TestForm extends Base {

static defaultPropertyValues(){
return{
idTest: 0,
name:'.Net',
description:'Frågor i C#',
question: new QuestionList()

}
}
  constructor(propertyValues = {}){
    super(propertyValues);



    if(!(this.questions instanceof QuestionList)){
      this.questions = new QuestionList(this.questions);
    }
  }

readAllFromDb() {
  this.db.readAll((data) => {
  console.log(data);
  });
}

static get sqlQueries() {
  return {
    readAll: `
     select question, answer FROM answerOptions, questions WHERE questions_idQuestion=1;

    `
  }
}

//listen to which answer alternative you have chosen
 message1(){

 	var answer = $('input[name=answer]:checked', '#form').val();
 	console.log(answer);

 }

  insertInDb(callback){
    this.db.newTestForm({
      idTest: this.idTest,
      name: this.name,
      description: this.description
    },callback);
  }

  static get sqlQueries(){
    return {
      newTestForm: `
        INSERT test SET ?
      ` 
    }
  }
}