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

}