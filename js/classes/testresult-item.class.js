class TestResultItem extends Base {

	static defaultPropertyValues() {

		return {
			question: 'Hur?',
			answer: 'Perfekt!',
			isCorrect: 0
		}
	}
	constructor(propertyValues) {
		super(propertyValues);

	}
}