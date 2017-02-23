class Login extends Base {

  constructor(propertyValues = {}){
    super(propertyValues);
  }



login(){


                var password = $('#inputPassword').val();
                var email = $('#inputEmail').val();
                this.db.readAll((data) => {

                  data.forEach(function(element) {
                    if(element.email == email && element.password == password){
                      console.log('inlogged');
                    }

                  });
                });


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
    `
  }
}
}
