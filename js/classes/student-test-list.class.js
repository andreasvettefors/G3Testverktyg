class StudentTestList extends List {

	constructor(items) {
		super(StudentTest, items);
	}

	readTestFromDbById(id) {
		this.db.readTests([id], (data) => {
			this.push.apply(this, data);
		});
	}

	static get sqlQueries() {
		return {
			readTests: `
       SELECT name FROM test JOIN test_has_users ON test_idTest = idTest WHERE user_idUser = ?;
      `
		}
	}
}