class StudentList extends List {

	constructor(items) {
		super(Student, items);
	}

	readStudentData(classId, callback) {
		this.db.readStudentData([classId], (data) => {
			this.push.apply(this, data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readStudentData: `
       SELECT idUser,email,classes_idClasses FROM users where classes_idClasses = ?
      `
		}
	}
}