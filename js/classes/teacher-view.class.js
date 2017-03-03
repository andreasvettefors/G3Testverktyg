class TeacherView extends Base {

	static defaultPropertyValues() {
		return {
			teacher: new Teacher()

		}
	}
	constructor(propertyValues) {
		super(propertyValues);
	}

	statistics() {
		$('#bodyTemplate').hide();
	}

	classes() {
		$('#bodyTemplate').show();
	}
}