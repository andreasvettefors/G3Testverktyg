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
      select question, answer FROM answerOptions, questions WHERE questions_idQuestion=1;

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

    //sparar svar till databas
    
    var studentA= new studentAnswer();
    var answerOptions = new AnswerOptionList();
    window.answerOptions = answerOptions;
    studentA.addAnswer(sv.student.ID);
    console.log('id:', answerOptions.answer);
  }

  if (this.currentQIndex == this.questions.length-1){
   $('#nextButton').remove();
   $('#finishButton').css('display','initial');
 }
 //gör så att varje gång man kommer till en ny fråga att ingen radio button är tryckt
$('input[name="answer"]').prop('checked', false);


}

console.log(answer);

}

finishTest(){

  var answer = $('input[name=answer]:checked', '#form').val();
  console.log(this.currentQIndex);

//checks if alternativs is undefined then disable next button
if(this.currentQIndex == this.questions.length-1) {
  $('#testForm').remove();
  var finish= new FinishedForm();
  finish.display('body');
}


}




backToQ(){

  var answer = $('input[name=answer]:checked', '#form').val();

  console.log(answer);
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



