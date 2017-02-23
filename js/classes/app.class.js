class App {

	constructor() {
		new BootstrapSize().display('body');
		var test = new TestForm();
     //console.log(test.questions[0].answerOptions);
     //var list = new AnswerOptionList();
      //console.log('list',list);
      //list.readFromDb(1);
	   
     
		test.questions.readAllFromDb(1,() => {
      test.questions[0].answerOptions.readFromDb(1, ()=>{
     test.display('body');
      });
      
    });




		

    window.test = test;

		/*var test = new TestForm();
var test2 = new TestForm({id: 2, title: 'Engelska'});
console.log(test);
console.log(test2);

test.display('body');*/



//test.readAllFromDb();
	}

	/*start(petOwnerView){

    // Instantiate som objects
    this.bootstrapSizeTool = new BootstrapSize();
    this.navbar = new Navbar();
    this.startPage = new StartPage();
    this.petOwnerView = petOwnerView;
    this.aboutPage = new AboutUs();

    // Show the navbar and the bootstrapSizeTool
    this.navbar.display('body');
    this.bootstrapSizeTool.display('body');

    // Add a page-content area in the DOM
    $('body').append('<div class="page-content"/>');

    // Some routes
    var router = new Router({
      '/': ()=>{ this.showPage(this.startPage); },
      '/petowners': ()=> { this.showPage(this.petOwnerView); },
      '/about-us': ()=> { this.showPage(this.aboutPage); }
    });

  }

  showPage(page){
    $('.page-content').empty();
    page.display('.page-content');
    this.navbar.setActiveLink();
  }*/



}