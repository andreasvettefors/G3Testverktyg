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
				if (authorisation == 1) {
					//Elev sida
					//window.location.replace("http://facebook.se");
					var sv = new StudentView();
					sv.student.finishedTests.readStudentFinishedTestFromDbById(id, () => {
						sv.student.testsToDo.readStudentTestFromDbById(id, () => {
							sv.student.readStudentFromDbById(id, () => {
								$('#login').remove();
								$('.wrongUserPass').remove();
								sv.display('body');
								window.sv = sv;
							});

						});
					});
				} else if (authorisation == 2) {
					//lärare
					var tv = new TeacherView();
					var cl = new ClassList();

					cl.readClassData(() => {
						tv.teacher.readTeacherFromDbById(id, () => {
							$('#login').remove();
							$('.wrongUserPass').remove();
							tv.display('body');
							cl.display('#classes');
						});
					});

					console.log('lärare')
				} else if (authorisation == 3) {
					//Administratör
					console.log('Administratör');
				}


			} else {
				$(".wrongUserPass").html(` <p style="text-align:center;color:red;font-size:25px">${this.wrongUserPass()} </p>`);
			}
		});
	}

	get id() {
		return this.id;
	}

	set id(userID) {
		this.id = userID;
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