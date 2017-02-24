class App {

	constructor() {
		new BootstrapSize().display('body');

		var test = new TestForm();
    
	   
    //hämtar question och answerAlternative från databasen 
		test.questions.readAllFromDb(1,() => {
      
    });


    window.test = test;
    
		new Login().display('body');
	}
}
