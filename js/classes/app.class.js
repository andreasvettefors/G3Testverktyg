class App {

	constructor() {
		new BootstrapSize().display('body');
    
		var a = new Login().display('body');
		var sv = new StudentView();
		sv.student.tests.readTestFromDbById(1);
		sv.student.readEmailFromDbById(1,()=>{
			sv.display('body');
		});
	}
} 
