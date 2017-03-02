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
	
	teacher(){			
		console.log('teacherseetest');
	}

	test0(e) {
		var tests = new TestFormList();
		window.t = tests;
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
					tr.testresultitem.readTestResultItem(sv.student.idUser,this.idTest, () => {
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

	test1teacher(){
		console.log('idTest', this.idTest);
		console.log('name', this.name);

		/*var sa = new studentAnswer();
		sa.getTestQuestionsCount(this.idTest, (total) => {
			sa.studentCorrectsCount(sv.student.idUser, this.idTest, (correct) => {
				sa.studentGradePercentage(sv.student.idUser, this.idTest, (grade) => {
					var tr = new TestResultView({
						name: this.name,
						student: sv.student.email,
						correctAnswers: correct,
						totalQuestions: total,
						grade: grade,
						userType: 2
					});
					tr.testresultitem.readTestResultItem(sv.student.idUser,this.idTest, () => {
						$('#studentview').remove();
						tr.display('body');
					});
				});
			});
		});*/
	}
}