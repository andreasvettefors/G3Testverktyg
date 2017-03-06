class TeacherView extends Base {

	static defaultPropertyValues() {
		return {
			teacher: new Teacher()

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


	statistics() {
		$('#bodyTemplate').hide();
	}

	classes() {
		$('#bodyTemplate').show();
	}
}