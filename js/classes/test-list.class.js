class TestList extends List {

	constructor(items) {
		super(Test, items);
	}

	readTests(callback) {
		this.db.readAllTests((data) => {
			this.push.apply(this, data);
			callback();
		});
	}

		static get sqlQueries() {
		return {
			readAllTests: `
       SELECT idTest,name FROM test
      `
		}
	}
}
