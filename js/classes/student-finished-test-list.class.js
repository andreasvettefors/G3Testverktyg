class StudentFinishedTestList extends List {

	constructor(items) {
		super(StudentTest, items);
	}

	readStudentFinishedTestFromDbById(id, callback) {
		this.db.readFinishedTests([id], (data) => {
			this.push.apply(this, data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readFinishedTests: `
       SELECT idTest,name,isDone FROM test JOIN test_has_users ON test_idTest = idTest WHERE user_idUser = ? AND isDone= 1
      `
		}
	}
}