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
  var studAns = new studentAnswer();
    var questID;
    var answerID;
    var answer = $('input[name=answer]:checked', '#form').val();
  //checks if alternativs is undefined then disable next button
    var radioBtnCollection = $("input:radio");
    var i =0;
radioBtnCollection.each(function(index, element){
    if (index == i && element.checked){
        answerID=parseInt(this.id);
    }
        i++;
});
  if(typeof answer == 'undefined') {
      $('#error-message').remove();
      $('<h4 id="error-message">Ett svarsalternativ måste väljas!</h4>').appendTo('.lead');
  }else{
    if(this.currentQIndex <= this.questions.length){
       $('#error-message').remove();
        questID=this.questions[this.currentQIndex].idQuestion;
        //////adds student choosen-answer to database///
        studAns.addAnswer(sv.student.idUser,answerID,questID);
        /////////////////////////////////////////////////
        this.currentQIndex++;
    }

     if (this.currentQIndex == this.questions.length-1){
       $('#nextButton').remove();      
       $('#finishButton').css('display','initial');
    }
    $('input[name="answer"]').prop('checked', false);
  }

  }
}

//Function that will take you to the page when the user have finished the test
finishTest(){

  var answer = $('input[name=answer]:checked', '#form').val();
	 console.log('answer',answer);
  var answerID = this.questions[this.currentQIndex].answerOptions[0].idAnswerOption;
     for(var i = 0; i < this.questions[this.currentQIndex].answerOptions.length; i++){
         var ansOpt =this.questions[this.currentQIndex].answerOptions[i].answer;
			 console.log('ansopt',ansOpt);
         if(ansOpt==answer){
             answerID=this.questions[this.currentQIndex].answerOptions[i].idAnswerOption;
         }
     }
	 console.log('ansid',answerID);
     var questID=this.questions[this.currentQIndex].idQuestion;
  //checks if alternativs is undefined then disable next button
      if(this.currentQIndex == this.questions.length-1) {
        $('#testForm').remove();
          var studAns = new studentAnswer();
            //////adds student choosen-answer to database////
           studAns.addAnswer(sv.student.idUser,answerID,questID);
            /////////////////////////////////////////////////
          var testId = this.questions[this.currentQIndex].test_idTest
          studAns.studentGradePercentage(sv.student.idUser,testId, (element) => {
            console.log(element);
            //Adds final testresult to "grade" database
            studAns.addGrade(element,testId,sv.student.idUser);
            ////////////////////////////////////////////////
          }); 
          studAns.updateUserCompletedTest(sv.student.idUser,testId);
          var finish= new FinishedForm();
          finish.display('body');
  }
  
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



