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

		if (this.userType == 1) {
			
			
			sv.student.finishedTests.splice(0,sv.student.finishedTests.length);
			sv.student.testsToDo.splice(0,sv.student.testsToDo.length);

			$('#testresultview').remove();
			
			// Get the list again from 
			sv.student.testsToDo.readStudentTestFromDbById(sv.student.idUser, () => {
				sv.student.finishedTests.readStudentFinishedTestFromDbById(sv.student.idUser, () => {
					sv.display('body');
				});
			});

		} else if (this.userType == 2) {
			$('#testresultview').remove();
			tv.display('body');
			$('.students').hide();
		} else if (this.userType == 3) {
			alert('Admin');
		} else {
			alert('Something else');
		}

	}

}