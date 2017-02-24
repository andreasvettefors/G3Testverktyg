class Student extends Base {

	static defaultPropertyValues() {

		return {
			ID: 0,
			email: 'john@student.se',
			tests: new StudentTestList()
		}
	}
	constructor(propertyValues) {
		super(propertyValues);

	}

	readStudentFromDbById(id, callback) {
		this.db.readStudentData([id], (data) => {
			this.ID = data[0].idUser;
			this.email = data[0].email;
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readStudentData: `
       SELECT idUser,email FROM users where idUser = ?;
      `
		}
	}

}