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

	activate(){
		$('div a').click(function(){
			$('a').removeClass("active");
			$(this).addClass("active");
		});
	}

}