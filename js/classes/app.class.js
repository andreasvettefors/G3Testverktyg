class App {

	constructor() {
		new BootstrapSize().display('body');
        var a = new login();
        a.readAllFromDb();
	}
    

}