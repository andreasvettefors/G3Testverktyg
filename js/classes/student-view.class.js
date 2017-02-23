class StudentView extends Base {

	static defaultPropertyValues() {
		return {
			student: new Student(),
		
		}
	}
	constructor(propertyValues) {
		super(propertyValues);	
	}
	
	
	
	readAllFromDb() {
		this.db.readAll((data) => {
		console.log(data);
		});
	}
	
	readOneFromDb() {
		this.db.readOne((data) => {
		console.log(data);
		});
	}

	static get sqlQueries() {
		return {
			readAll: `
       SELECT * FROM users;
      `,
			readOne: `
        SELECT email FROM users
      `
		}
	}
}