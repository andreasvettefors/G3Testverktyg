class Student extends Base {
	
		  static defaultPropertyValues(){
    
				return {
					studentID: 0,
					email: 'john@doe.se',
			tests: new StudentTestList() 
    }
  }
		constructor(propertyValues) {
			super(propertyValues);
			
		}	
	
	readEmailFromDbById(id,callback){
		this.db.readEmail([id],(data) => {
			this.studentID = data[0].idUser;
			this.email = data[0].email;
			callback();
		});	
	}
	
	
	

	
	static get sqlQueries() {
		return {
			readEmail: `
       SELECT idUser,email FROM users where idUser = ?;
      `
		}
	}
	
}