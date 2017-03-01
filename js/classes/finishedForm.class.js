class FinishedForm extends Base {

	constructor(propertyValues) {
		super(propertyValues); 
	}

	seeResult() {
		
		var sa = new studentAnswer();
		sa.getTestQuestionsCount(test.idTest, (total) => {
			sa.studentCorrectsCount(sv.student.idUser, test.idTest, (correct) => {
				sa.studentGradePercentage(sv.student.idUser, test.idTest, (grade) => {
					var tr = new TestResultView({
						name: test.name,
						student: sv.student.email,
						correctAnswers: correct,
						totalQuestions: total,
						grade: grade,
						userType: 1
					});
					tr.testresultitem.readTestResultItem(sv.student.idUser,test.idTest, () => {
						$('#finishedform').remove();
						tr.display('body');
					});
				});
			});

		});

	}



}