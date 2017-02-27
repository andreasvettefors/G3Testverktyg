class FinishedForm extends Base {

	constructor(propertyValues) {
		super(propertyValues);
	}

	finishTest() {
		var sa = new studentAnswer();
		sa.getTestQuestionsCount(1, (total) => {
			sa.studentCorrectsCount(sv.student.idUser, 1, (correct) => {
				sa.studentGradePercentage(sv.student.idUser, 1, (grade) => {
					var tr = new TestResultView({
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