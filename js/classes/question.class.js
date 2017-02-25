class Question extends Base {

	static defaultPropertyValues(){
		return{
			idQuestion: 0,
			question: 'Are you stupid?',
			imgURL: 'http://www.virtualstock.co.uk/assets/Uploads/10px-blank.png',
			test_idTest: 0,
			answerOptions: new AnswerOptionList()
		}

	}
	constructor(propertyValues){
		super(propertyValues);
// när en fråga skapas hämtar man svarsalternativen som är kopplade 
//till den frågan med hjälp av idQuestion
    //this.answerOptions.readFromDb(this.idQuestion, ()=>{
      //if(test.questions.indexOf(this) == test.questions.length -1){
				//  test.display('body');
      //}
      
      //});
	
	}


	insertInDb(callback){
    this.db.newQuestion({
      idQuestion: this.idQuestion,
      question: this.question,
      imgURL: this.imgURL,
      test_idTest: this.test_idTest
    },callback);
  }


  readQuestionFromDb(){
    this.db.readQuestion((data) => {
                  var quest=[];
                  var a = 0;
                  data.forEach(function(element) {
                   quest[a]=element.question
                   a++;
                       });
                  return(quest[2]);
      
                });
              
}

  static get sqlQueries(){
    return {
      newQuestion: `
        INSERT questions SET ?
      `,
      readQuestion: `
      select * from questions
      ` 
  		    

    }
  }
}