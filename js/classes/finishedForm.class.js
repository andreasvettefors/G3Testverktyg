class FinishedForm extends Base {

	constructor(propertyValues) {
		super(propertyValues);
	}

	finishTest() {
        
		var sa = new studentAnswer();
		sa.getTestQuestionsCount(test.idTest, (total) => {
			sa.studentCorrectsCount(sv.student.idUser, test.idTest, (correct) => {
				sa.studentGradePercentage(sv.student.idUser, test.idTest, (grade) => {
					var tr = new TestResultView({
                        testName: test.name,
						student: sv.student.email,
						correctAnswers: correct,
						totalQuestions: total,
						grade: grade
					});
					tr.testresultitem.readTestResultItem(sv.student.idUser, () => {
						$('#finishedform').remove();
						tr.display('body');
					});
				});
			});

		});

	}



}