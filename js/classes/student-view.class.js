class StudentView extends Base {
	
		  static defaultPropertyValues(){
    return {
      name: ['test1','test2']
 
    }
  }
		constructor(propertyValues) {
			super(propertyValues);
		}
	
}