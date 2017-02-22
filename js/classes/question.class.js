class Question extends Base{

	static defaultPropertyValues(){
		return{
			idQuestion: 0,
			question: 'Are you stupid?',
			imgURL: 'image.jpg',
			test_idTest: 0
			//answerOptions: new AnswerOptionList();
		}

	}
	constructor(propertyValues = {}){
		super(propertyValues);




	// If needed convert the pets property 
    // from Array to PetList
    if(!(this.answerOptions instanceof AnswerOptionList)){
      this.answerOptions = new AnswerOptionList(this.answerOptions);
    }
	}


	insertInDb(callback){
    this.db.newQuestion({
      idQuestion: this.idQuestion,
      question: this.question,
      imgURL: this.imgURL,
      test_idTest: this.test_idTest
    },callback);
  }

  static get sqlQueries(){
    return {
      newQuestion: `
        INSERT questions SET ?
      ` 
    }
  }
}