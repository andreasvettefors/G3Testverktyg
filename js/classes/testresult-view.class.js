class TestResultView extends Base {

	static defaultPropertyValues() {
		return {
			name: 'Kalle',
			student: 'student@testresult.au',
			correctAnswers: 0,
			totalQuestions: 0,
			grade: 0,
			userType: 0,
			testresultitem: new TestResultItemList()
		}
	}
	constructor(propertyValues) {
		super(propertyValues);
	}

	goBack() {
		// Om man är elev och vill gå tillbaka från sitt testresultat
		if (this.userType == 1) {

			// Rensar testlistorna
			sv.student.finishedTests.splice(0, sv.student.finishedTests.length);
			sv.student.testsToDo.splice(0, sv.student.testsToDo.length);

			$('#testresultview').remove();

			// Läser in listorna igen för att få rätt output när man går tillbaka
			sv.student.testsToDo.readStudentTestFromDbById(sv.student.idUser, () => {
				sv.student.finishedTests.readStudentFinishedTestFromDbById(sv.student.idUser, () => {
					sv.display('body');
				});
			});
			// Om man är lärare och vill gå tillbaka från sitt testresultat
		} else if (this.userType == 2) {

			$('#testresultview').remove();
			tv.display('body');
			statv.display('.main-content');
			$('#bodyTemplate2').hide();
			// Ändrar data-click för att komma till rätt metod som lärare
			$('.testlist').each(function () {
				var id = $(this).attr('data-id');
				var attrVal = $(this).attr('data-click');
				var newAttrVal = `${attrVal}teacher`;
				$(`[data-id=${id}]`).attr('data-click', newAttrVal);
			});
			$('.students').hide();
		} else if (this.userType == 3) {
			alert('Admin');
		} else {
			alert('Something else');
		}

	}

}

