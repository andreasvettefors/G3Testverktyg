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

					var sv = new StudentView();
					sv.student.readStudentFromDbById(id, () => {
						$(function () {
							$('#login').remove();
							$('canvas').remove();
							$('.headerNewton').remove();
							$('.headerNewton2').remove();
							$('.wrongUserPass').remove();
							$(function () {
								sv.display('body');
								window.sv = sv;
							});
						});

					});

				} else if (authorisation == 2) {
					//lärare
					var tv = new TeacherView();
					var statv = new StatisticView();

					tv.teacher.readTeacherFromDbById(id, () => {

						$(function () {
							$('#login').remove();
							$('canvas').remove();
							$('.headerNewton').remove();
							$('.headerNewton2').remove();
							$('.wrongUserPass').remove();

							$(function () {
								tv.display('body');
								statv.display('.main-content');
								statv.getStats(1);
								$('#statistics').hide();
								$('#bodyTemplate2').hide();

								// För att ändra attributet data-click så det inte 
								// använder sig av samma metod som när man trycker 
								// på testet i studentview	
								$('.testlist').each(function () {
									var id = $(this).attr('data-id');
									var attrVal = $(this).attr('data-click');
									var newAttrVal = `${attrVal}teacher`;
									$(`[data-id=${id}]`).attr('data-click', newAttrVal);
								});

								$('.students').hide();

								window.tv = tv;
								window.statv = statv;
							});
						});


					});
					//data-click="test${this.isDone}"
					console.log('lärare')
				} else if (authorisation == 3) {
					console.log('Administratör');
					var admin = new Administrator();
					admin.readAdminFromDbById(id, () => {
						admin.readAllUsers(() => {
							$('#login').remove();
							$('canvas').remove();
							$('.headerNewton').remove();
							$('.wrongUserPass').remove();
							admin.display('body');
						});
					});


				}


			} else {
				$(".wrongUserPass").html(` <p class="center">${this.wrongUserPass()} </p>`);
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