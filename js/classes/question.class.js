class Question extends Base {

	static defaultPropertyValues(){
		return{
			idQuestion: 0,
			question: 'Are you stupid?',
			imgURL: '',
			test_idTest: 0,
			answerOptions: new AnswerOptionList()
		}

	}
	constructor(propertyValues){
		super(propertyValues);
   
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