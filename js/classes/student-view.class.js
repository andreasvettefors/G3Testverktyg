class StudentView extends Base {

	static defaultPropertyValues() {
		return {
			student: new Student()
		}
	}
	constructor(propertyValues) {
		super(propertyValues);
	}

	showDropDownMenu(e){
		if($(window).width() <=375) {
			$('.droplist').slideToggle("linear");
		}
	}

}