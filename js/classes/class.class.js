class Class extends Base {

	static defaultPropertyValues() {

		return {
			idClasses: 0,
			name: 'A Great class',
			students: new StudentList()
		}
	}
	constructor(propertyValues) {
		super(propertyValues);
		this.students.readStudentData(this.idClasses,()=>{	
		});
	}
	
	showStudentsInClass(e){
		$('.studentlink').remove();
		$(e.target).after(this.students.display());

	}


}