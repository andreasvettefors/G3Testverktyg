class TestForm extends Base{

	static defaultPropertyValues(){
		return{
			idTest: 0,
			title:'Programmering A',
			//description:''
			question: ['question1','question2']

		}
		
	}

	constructor(propertyValues = {}){
		super(propertyValues);
	} 

 message1(){

 	alert("hej");
 }
	
  
} 