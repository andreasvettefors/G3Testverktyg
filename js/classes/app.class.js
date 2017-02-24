class App {

	constructor() {
		new BootstrapSize().display('body');
		var test = new TestForm();
    
	   
    //hämtar question och answerAlternative från databasen 
		test.questions.readAllFromDb(1,() => {
    //test.questions[0].answerOptions.readFromDb(1, ()=>{
    //test.display('body');
      //});
      
    });


    window.test = test;
    	

	

    }
   
}


