class Teacher extends Base {

	static defaultPropertyValues() {

		return {
		  ID: 0,
			email: 'john@teacher.se',
			classes:new ClassList()
		}
	}
	constructor(propertyValues) {
		super(propertyValues);

	}

	readTeacherFromDbById(id, callback) {
		this.db.readTeacherData([id], (data) => {
			this.ID = data[0].idUser;
			this.email = data[0].email;
			console.log();
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readTeacherData: `
       SELECT idUser,email FROM users where idUser = ?;
      `
		}
	}

}
