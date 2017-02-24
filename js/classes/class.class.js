class Class extends Base {

	static defaultPropertyValues() {

		return {
			idClasses: 0,
			name: 'A special class'
		}
	}
	constructor(propertyValues) {
		super(propertyValues);

	}
	
	showStudentsInClass(e){
		$('.studentlink').remove();
		var sl = new StudentList();
		sl.readStudentData(this.idClasses,()=>{
			$(e.target).after(sl.display());
			//sl.display('.students');
			window.sl = sl;
		});
	}


}