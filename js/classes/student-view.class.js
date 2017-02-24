class StudentView extends Base {

	static defaultPropertyValues() {
		return {
			student: new Student(),

		}
	}
	constructor(propertyValues) {
		super(propertyValues);
	}



}