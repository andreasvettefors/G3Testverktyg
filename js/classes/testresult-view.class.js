class TestResultView extends Base {

	static defaultPropertyValues() {
		return {
			student: 'student@testresult.au',
			correctAnswers: 0,
			totalQuestions: 0,
			grade: 0,
			testresultitem: new TestResultItemList()

		}
	}
	constructor(propertyValues) {
		super(propertyValues);
	}

}