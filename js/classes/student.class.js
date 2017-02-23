class Student extends Base {
	
		  static defaultPropertyValues(){
    
				return {
					email: 'john@doe.se',
			tests: new StudentTestList()
    }
  }
		constructor(propertyValues) {
			super(propertyValues);
			
		}	
	
	readEmailFromDbById(id){
		this.db.readEmail([id],(data) => {
			 this.email = data[0].email;	
		});
	}
	

	
	static get sqlQueries() {
		return {
			readEmail: `
       SELECT email FROM users where idUser = ?;
      `
		}
	}
	
}