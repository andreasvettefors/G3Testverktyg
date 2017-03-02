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
		
		$('.students').hide();
		var a = $(e.target).text();
		console.log('class',a);	
		$(e.target).after($('.' + a).show());
		
	}


}