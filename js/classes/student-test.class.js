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
					tr.testresultitem.readTestResultItem(sv.student.idUser, () => {
						$('#studentview').remove();
						tr.display('body');
					});
				});
			});

		});
	}

	test0(e) {
		var tests = new TestFormList();

		tests.readAllFromDb(() => {

			// Kollar vilket test som har blivit tryckt på och 
			// sedan tar fram id från namnet
			var el = $(e.target).text();
			for (var item of tests) {
				console.log(item.name)
				if (el === item.name) {
					var id = item.idTest;
				}
			}

			var test = tests[id - 1];
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
}