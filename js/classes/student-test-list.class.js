class StudentTestList extends List {

	constructor(items) {
		super(StudentTest, items);
	}

	readStudentTestFromDbById(id, callback) {
		this.db.readTests([id], (data) => {
			this.push.apply(this, data);
			callback(data);
		});
	}

	static get sqlQueries() {
		return {
			readTests: `
       SELECT idTest,name,isDone,timeLimit FROM test JOIN test_has_users ON test_idTest = idTest WHERE user_idUser = ? AND isDone= 0
      `
		}
	}
}