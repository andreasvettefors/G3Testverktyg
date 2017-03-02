class TeacherView extends Base {

	static defaultPropertyValues() {
		return {
			teacher: new Teacher()

		}
	}
	constructor(propertyValues) {
		super(propertyValues);
	}

statistics(){
	$('#bodyTemplate').remove();

}
}