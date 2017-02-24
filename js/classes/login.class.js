class Login extends Base {

	constructor(propertyValues = {}) {
		super(propertyValues);
	}

	wrongUserPass() {
		return 'wrong username or password';
	}

	login() {
		var validate = false;

		var password = $('#inputPassword').val();
		var email = $('#inputEmail').val();
		var id;
		var authorisation;
		this.db.readAll((data) => {

			data.forEach(function (element) {

				if (element.email == email && element.password == password) {
					id = element.idUser;
					authorisation = element.authorisation;
					console.log(element.idUser + " " + authorisation);
					validate = true;
				}

			});
			if (validate) {

				if(authorisation == 1){

					//Elev sida
					//window.location.replace("http://facebook.se");
					var sv = new StudentView();
					sv.student.tests.readTestFromDbById(id, () => {
						sv.student.readEmailFromDbById(id, () => {
							$('#login').remove();
							$('.wrongUserPass').remove();
							sv.display('body');
							window.sv = sv;
						});
					});
				} else if (authorisation == 2){
					//lärare
					console.log('lärare')
				} else if (authorisation == 3){
					//Administratör
					console.log('Administratör');
				}



			} else {
				$(".wrongUserPass").html(` <p style="text-align:center;color:red;font-size:25px">${this.wrongUserPass()} </p>`);
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
