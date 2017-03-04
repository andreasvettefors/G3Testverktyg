class TestResultItemList extends List {

	constructor(items) {
		super(TestResultItem, items);
	}

	readTestResultItem(userId,testId,callback) {
		this.db.readTestResultItem([userId,testId],(data) => {
			this.push.apply(this, data);
			callback();
		});
	}


		static get sqlQueries() {
		return {
			readTestResultItem: `
       SELECT question,answer,isCorrect FROM testresults WHERE user_idUser = ? AND test_idTest = ? 
      `
		}
	}
}

