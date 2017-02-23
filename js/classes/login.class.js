class Login extends Base {

  constructor(propertyValues = {}){
    super(propertyValues);
  }

 wrongUserPass(){
  return 'wrong username or password';
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
                     $( ".wrongUserPass" ).html( ` <p style="text-align:center;color:red;font-size:25px">${this.wrongUserPass()} </p>`);
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
