class App {

	constructor() {
		new BootstrapSize().display('body');
		
		var sv = new StudentView();
		
	
		//var a = new StudentTest();
		//var b = new StudentTest();	
		//sv.student.tests.push(a,b);
		sv.student.readEmailFromDbById(2);
		sv.student.tests.readTestFromDbById(1);
		sv.display('body');
			console.log(sv);
		window.sv= sv;
		
	
		
	
		/*var a = new StudentTest();
		var b = new StudentTest({test: 'webb'});
		
		sv.tests.push(a,b);
		
		sv.display('body');*/
		
    //sv.readAllFromDb();
		//sv.readOneFromDb();



		//var t = new StudentTest();
	
		//console.log(b);
	}

}