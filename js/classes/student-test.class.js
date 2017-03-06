class StudentTest extends Base {
	static defaultPropertyValues() {
		return {
			idTest: 0,
			name: 'Java',
			isDone: 0,
			timeLimit: 0
		}
	}
	constructor(propertyValues) {
		super(propertyValues);


	}

	teacher() {
		console.log('teacherseetest');
	}

	teacher() {
		console.log('teacherseetest');
	}

	test0(e) {
		var tests = new TestFormList();
		tests.readAllFromDb(() => {

			// Kollar vilket test som har blivit tryckt på och
			// var i listan det ligger 
			var el = $(e.target).text();
			for (var item of tests) {
				if (el === item.name) {
					var id = item.idTest;
					var index = tests.indexOf(item);
				}
			}

			var test = tests[index];
			//hämtar question och answerAlternative från databasen
			test.questions.readAllFromDb(id, () => {
				$(function () {
					$('#studentview').remove();
					test.display('body');
					window.test = test;
				});

			});
		});



	}

	test0(e) {
		var tests = new TestFormList();
		tests.readAllFromDb(() => {

			// Kollar vilket test som har blivit tryckt på och
			// var i listan det ligger 
			var el = $(e.target).text();
			for (var item of tests) {
				if (el === item.name) {
					var id = item.idTest;
					var index = tests.indexOf(item);
				}
			}

			var test = tests[index];
			//hämtar question och answerAlternative från databasen
			test.questions.readAllFromDb(id, () => {
				$(function () {
					$('#studentview').remove();
					test.display('body');
					window.test = test;

					// Tidsgränsen för att klara testet sätts här. 
					var totalSec = test.timeLimit;
					// Funktionn körs varje sekund vilket gör att det ser ut som en timer
					var x = setInterval(function (){
						//Räknar ut minuter och sekunder till timern
						var min = parseInt(totalSec / 60, 10);
						var sec = totalSec - (min * 60);
						
						// Visar tiden
						$('#showtime').html("Tid kvar: " + min + "m " + sec + "s");

						// Minskar tiden med
						totalSec--;
						
						
						//Om tiden blir noll så körs detta block
						if (totalSec < 0) {
							$('#testForm').remove();
							var timesUp = new Modal({
      						content: 'Tyvärr, tiden tog slut!',
      						okButton: 'Ok'
							});

							clearInterval(x);
							//console.log(sv.student.idUser);
							var studAns = new studentAnswer();
		
							//////adds student choosen-answer to database////
							/////////////////////////////////////////////////
							
							console.log("studid",sv.student.idUser,"testid",test.idTest);
							studAns.studentGradePercentage(sv.student.idUser, test.idTest, (element) => {
								console.log(element);
								//Adds final testresult to "grade" database
								studAns.addGrade(element, test.idTest, sv.student.idUser);
								////////////////////////////////////////////////
							});
							studAns.updateUserCompletedTest(sv.student.idUser, test.idTest);
							
							var finish = new FinishedForm();
							finish.display('body');
						}
					}, 1000);
				});
			});
		});
	}




	test1() {
		console.log('idTest', this.idTest);
		console.log('name', this.name);

		var sa = new studentAnswer();
		sa.getTestQuestionsCount(this.idTest, (total) => {
			sa.studentCorrectsCount(sv.student.idUser, this.idTest, (correct) => {
				sa.studentGradePercentage(sv.student.idUser, this.idTest, (grade) => {
					var tr = new TestResultView({
						name: this.name,
						student: sv.student.email,
						correctAnswers: correct,
						totalQuestions: total,
						grade: grade,
						userType: 1
					});


					tr.testresultitem.readTestResultItem(sv.student.idUser, this.idTest, () => {
						$('#studentview').remove();
						tr.display('body');
					});
				});
			});
		});
	}

	test0teacher() {
		return;
	}

	test0teacher() {
		return;
	}

	test1teacher(e) {
		console.log('idTest', this.idTest);
		console.log('name', this.name);
		var el = $(e.target).closest('.testWrapper').find('.studentEmail').text();

		var email;
		var id;
		// Loopa igenom listorna för att få reda på 
		// vilket id studenten har för att kunna få fram rätt testresultat

		for (let teacherclass of tv.teacher.classes) {
			for (let student of teacherclass.students) {
				if (el == student.email) {

					id = student.idUser;
					email = student.email;
				}
			}
		}

		console.log('studentid', id);

		//Hämtar data för att kunna sätta ihop ett testresultat
		var sa = new studentAnswer();
		sa.getTestQuestionsCount(this.idTest, (total) => {
			sa.studentCorrectsCount(id, this.idTest, (correct) => {
				sa.studentGradePercentage(id, this.idTest, (grade) => {
					var tr = new TestResultView({
						name: this.name,
						student: email,
						correctAnswers: correct,
						totalQuestions: total,
						grade: grade,
						userType: 2
					});
					//Skapar testresultatet

					tr.testresultitem.readTestResultItem(id, this.idTest, () => {
						$('#teacherview').remove();
						tr.display('body');
					});
				});
			});
		});
	}
}