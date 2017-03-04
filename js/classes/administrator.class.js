class Administrator extends Base {

  static defaultPropertyValues() {
    return {

		}
  }


  constructor(propertyValues){
    super(propertyValues);

  }



  helloMyFriend(){
    return 'hej';
  }

  readAdminFromDbById(id, callback) {
    this.db.readAdminData([id], (data) => {
      this.email = data[0].email;

      console.log(data);
      callback();
    });
  }

  readAllUsers(callback) {
    this.db.getAllUsers((data) => {
      this.data = data;
      callback();
    });
  }



  static get sqlQueries() {
    return {
      readAdminData: `
       SELECT idUser,email FROM users where idUser = ?;
      `,
      getAllUsers: `
       select * from users;
      `,
    }
  }
}
