class TeacherView extends Base {

	static defaultPropertyValues() {
		return {
			student: new Teacher(),

		}
	}
	constructor(propertyValues) {
		super(propertyValues);
	}



}