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
		this.students.readStudentData(this.idClasses, () => {});
	}

	showStudentsInClass(e) {

		var a = $(e.target).text();

		// Visar statistik för en klass
		$(e.target).closest('#bodyTemplate2').find('#statistics').slideToggle('linear');
		// Visar elever ri en klass
		$(e.target).after($('.' + a).slideToggle("linear"));


	}

}