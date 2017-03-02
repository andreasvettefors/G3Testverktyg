class Administrator extends Base {

  constructor(propertyValues){
    super(propertyValues);
  }

  helloMyFriend(){
    return 'hej';
  }

  readAdminFromDbById(id, callback) {
    this.db.readAdminData([id], (data) => {
      this.ID = data[0].idUser;
      this.email = data[0].email;
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
