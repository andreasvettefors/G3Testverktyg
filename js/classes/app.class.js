class App {

	constructor() {

        /*
           HUR MAN KALLAR CALLBACKS METODER
           var a = new studentAnswer();
      a.studentGradePercentage(1,1, (element) => {
            //VÄRDET FINNS I "ELEMENT"
				console.log(element);
          }); 
          */
    	

		new BootstrapSize().display('body');


		//test.questions[0].answerOptions.readFromDb(1, ()=>{
      
      //});

		new Login().display('body');
	}
}
