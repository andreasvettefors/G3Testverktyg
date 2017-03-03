class Userlist extends List {

	constructor(items) {
		super(items);
	}

	readAllUsers(callback) {
		this.db.getAllUsers((data) => {
			this.push.apply(this, data);
			callback();
		});
	}


  static get sqlQueries() {
    return {
      getAllUsers: `
       select * from users;
      `
    }
  }
}
