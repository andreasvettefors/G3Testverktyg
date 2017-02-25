class TestResultItemList extends List {

	constructor(items) {
		super(TestResultItem, items);
	}

	readTestResultItem(userId,callback) {
		this.db.readTestResultItem([userId],(data) => {
			this.push.apply(this, data);
			callback();
		});
	}

		static get sqlQueries() {
		return {
			readTestResultItem: `
       SELECT question,answer FROM testresuls WHERE user_idUser = ?
      `
		}
	}
}

