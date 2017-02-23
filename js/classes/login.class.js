class Login extends Base {

  constructor(propertyValues = {}){
    super(propertyValues);
  }

 wrongUserPass(){
  return 'wrong username/password';
}

login(){
  var validate = false;

                var password = $('#inputPassword').val();
                var email = $('#inputEmail').val();
                this.db.readAll((data) => {

                  data.forEach(function(element) {

                    if(element.email == email && element.password == password){
                      validate = true;
                    }

                  });
                  if(validate){
                    window.location.replace("http://facebook.se");
                  } else{
                     console.log(this.wrongUserPass());
                  }
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
