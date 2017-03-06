class StudentTest extends Base {
	static defaultPropertyValues() {
		return {
			idTest: 0,
			name: 'Java',
			isDone: 0
		}
	}
	constructor(propertyValues) {
		super(propertyValues);


	}

	teacher() {
		console.log('teacherseetest');
	}
	
	teacher(){			
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
					var d = 5;
					var myVar = setInterval(function () {
						console.log(d);
						d--;
						if(d<0){
							$('#testForm').remove();
							alert("timeUp");
							clearInterval(myVar);
						
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
	
	test0teacher(){
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