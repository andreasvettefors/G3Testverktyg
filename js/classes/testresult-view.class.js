class TestResultView extends Base {

	static defaultPropertyValues() {
		return {
			student: 'student@testresult.au',
			testresultitem: new TestResultItemList()

		}
	}
	constructor(propertyValues) {
		super(propertyValues);
	}
	
	goBack(){
		$('#testresultview').remove();
		tv.display('body');
		cl.display('#classes');
	}

}