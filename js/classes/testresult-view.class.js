class TestResultView extends Base {

	static defaultPropertyValues() {
		return {
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
	
	goBack(){
		console.log(this.userType);
		if(this.userType== 1){
			$('#testresultview').remove();
			sv.display('body');
			alert('student');
		}
		else if(this.userType == 2){
			$('#testresultview').remove();
			tv.display('body');
			cl.display('#classes');
		}
		else if(this.userType==3){
			alert('Admin');
		}
		else{
			alert('Something else');
		}
		
	}

}