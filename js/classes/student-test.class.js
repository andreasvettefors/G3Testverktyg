class StudentTest extends Base {
	static defaultPropertyValues() {
		return {
			name: 'Java',
			isDone: 0
		}
	}
	constructor(propertyValues) {
		super(propertyValues);

	}

	test1() {
		var sa = new studentAnswer();
		sa.getTestQuestionsCount(1, (total) => {
			sa.studentCorrectsCount(sv.student.idUser, 1, (correct) => {
				sa.studentGradePercentage(sv.student.idUser, 1, (grade) => {
					var tr = new TestResultView({
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

	test0() {
		var tests = new TestFormList();
		tests.readAllFromDb(() => {
			//hämtar question och answerAlternative från databasen 
			var test = tests[0];
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
		});

	}
}