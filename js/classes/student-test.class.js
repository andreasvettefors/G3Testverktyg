class StudentTest extends Base{
		  static defaultPropertyValues(){
    return {
      name: 'Java'
    }
  }
		constructor(propertyValues) {
			super(propertyValues);

		}
	
	doTest(){
		console.log('id:',sv.student.studentID);
		console.log('email:',sv.student.email);
		
	}

	}
