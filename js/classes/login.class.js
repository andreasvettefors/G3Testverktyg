class login extends Base {

  constructor(propertyValues = {}){
    super(propertyValues);
  }
message(){

              var answer = $('button').val();
                var email = $('.inputPassword').val();

              console.log('hej du har klickat på mig! '+ email);


}

readAllFromDb() {
  this.db.readAll((data) => {
  console.log(data);
  });
}

static get sqlQueries() {
  return {
    readAll: `
     SELECT * FROM users;
    `,
      newAnswer:`
    SELECT `
  }
}
}