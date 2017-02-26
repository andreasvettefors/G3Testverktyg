class Nice extends Base {

  constructor(propertyValues){
    super(propertyValues);
  }
	
			addAnswer(userID, answerID, questionID) {
			console.log('id', userID, 'ans', answerID, 'quest', questionID);
			// Just an example of how to run a query
			this.db.newAnswer([userID, answerID, questionID], (data) => {
				console.log('Result of the query "addAnswer"', data);
			});
		}

		static get sqlQueries() {
		return {
			newAnswer: `
       INSERT INTO studentanswers (user_idUser,answerOptions_idAnswerOption,answerOptions_questions_idQuestion) VALUES (?,?,?)
      `
		}
	}

}