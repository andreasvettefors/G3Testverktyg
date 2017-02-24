class StudentTest extends Base {
	static defaultPropertyValues() {
		return {
			name: 'Java'
		}
	}
	constructor(propertyValues) {
		super(propertyValues);

	}

	doTest() {
		var test = new TestForm();

		//hämtar question och answerAlternative från databasen 
		test.questions.readAllFromDb(1, () => {

				test.questions[0].answerOptions.readFromDb(1, () => {
				test.questions[1].answerOptions.readFromDb(2, () => {
					test.questions[2].answerOptions.readFromDb(3, () => {
						test.questions[3].answerOptions.readFromDb(4, () => {
							test.questions[4].answerOptions.readFromDb(5, () => {
								test.questions[5].answerOptions.readFromDb(6, () => {

									$('#studentview').remove();
									test.display('body');
									window.test = test;

								});

							});

						});

					});

				});

			});
		});

				console.log('id:', sv.student.idUser);
				console.log('email:', sv.student.email);
			}
		}
