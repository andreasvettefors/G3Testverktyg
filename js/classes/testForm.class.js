class TestForm extends Base {

  static defaultPropertyValues(){
    return{
      idTest: 0,
      name:'Objektorienterad Programmering',
      description:'Frågor i C#',
      questions: new QuestionList(),
      currentQIndex: 0
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);

    if(!(this.questions instanceof QuestionList)){
      this.questions = new QuestionList(this.questions);
    }
  }

  readAllFromDb() {
    this.db.readAll((data) => {
      console.log(data);
    });
  }

  static get sqlQueries() {
    return {
      readAll: `
      SELECT idTest, name, description, question, answer FROM test
      LEFT OUTER JOIN questions ON (test.idTest=questions.test_idTest)
      LEFT OUTER JOIN answerOptions ON (questions.idQuestion=answerOptions.questions_idQuestion)
      WHERE questions.test_idTest 
      OR answerOptions.questions_Test_idTest 

      `
    }
  }

// get the question
  get question() {
    return this.questions[this.currentQIndex];
  }
//listen to which answer alternative you have chosen and goes to the next question
  nextQ(){

    var answer = $('input[name=answer]:checked', '#form').val();
  //checks if alternativs is undefined then disable next button
   if(typeof answer == 'undefined') {
      $('#error-message').remove();
      $('<h4 id="error-message">Ett svarsalternativ måste väljas!</h4>').appendTo('.lead');

    }else{
      if(this.currentQIndex < this.questions.length){
        this.currentQIndex++;
        $('#error-message').remove();
        }

      if (this.currentQIndex == this.questions.length-1){
        $('#nextButton').remove();
        $('#finishButton').css('display','initial');
        }
 //Will reset the radio buttons so they are not checked 
    $('input[name="answer"]').prop('checked', false);
  }
}

//Function that will take you to the page when the user have finished the test
finishTest(){

  var answer = $('input[name=answer]:checked', '#form').val();
  
//checks if alternativs is undefined then disable next button
  if(this.currentQIndex == this.questions.length-1) {
    $('#testForm').remove();
    var finish= new FinishedForm();
    finish.display('body');
    }
}



//function so you can go back to previous question
backToQ(){

  var answer = $('input[name=answer]:checked', '#form').val();
  if(this.currentQIndex > 0){
    this.currentQIndex--;
    $('#error-message').remove();
  }
}

insertInDb(callback){
  this.db.newTestForm({
    idTest: this.idTest,
    name: this.name,
    description: this.description
  },callback);
}

  static get sqlQueries(){
    return {
      newTestForm: `
      INSERT test SET ?
      ` 
    }
  }


}



