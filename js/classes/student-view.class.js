class StudentView extends Base {

	static defaultPropertyValues() {
		return {
			student: new Student(),
		
		}
	}
	constructor(propertyValues) {
		super(propertyValues);	
	}
	
	get email(){
		return this.student.email;
	}
	
	set email(e){
		this.student.email = e;
	}
}