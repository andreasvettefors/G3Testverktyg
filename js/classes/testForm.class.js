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
  var studAns = new studentAnswer();
    var questID;
    var answerID;
    var answer = $('input[name=answer]:checked', '#form').val();
  //checks if alternativs is undefined then disable next button
    var radioBtnCollection = $("input:radio");
    var i =0;
radioBtnCollection.each(function(index, element){
    if (index == i && element.checked){
        answerID=this.id;
    }
        i++;
});
  if(typeof answer == 'undefined') {
   
  }else{
    if(this.currentQIndex <= this.questions.length){
        questID=this.questions[this.currentQIndex].idQuestion;
        //////adds student choosen-answer to database////
        studAns.addAnswer(sv.student.ID,answerID,questID);
        /////////////////////////////////////////////////
      this.currentQIndex++;
    }

     if (this.currentQIndex == this.questions.length-1){
       $('#nextButton').remove();      
       $('#finishButton').css('display','initial');
    }

  }

console.log(answer);
   
 }

 finishTest(){
  
  var answer = $('input[name=answer]:checked', '#form').val();
  var answerID = this.questions[this.currentQIndex].answerOptions[0].idAnswerOption;
     for(var i = 0; i > 6; i++){
         var ansOpt =this.questions[this.currentQIndex].answerOptions[i].answer;
         if(ansOpt==answer){
             answerID=this.questions[this.currentQIndex].answerOptions[i].idAnswerOption;
         }
     }
     var questID=this.questions[this.currentQIndex].idQuestion;
  //checks if alternativs is undefined then disable next button
      if(this.currentQIndex == this.questions.length-1) {
        $('#testForm').remove();
          var studAns = new studentAnswer();
            //////adds student choosen-answer to database////
           studAns.addAnswer(sv.student.ID,answerID,questID);
            /////////////////////////////////////////////////
          var testId = this.questions[this.currentQIndex].test_idTest
          studAns.studentGradePercentage(sv.student.ID,testId, (element) => {
            console.log(element);
            //Adds final testresult to "grade" database
            studAns.addGrade(element,testId,sv.student.ID);
            ////////////////////////////////////////////////
          }); 
          studAns.updateUserCompletedTest(sv.student.ID,testId);
          var finish= new FinishedForm();
          finish.display('body');
  }

  
  }


    

 backToQ(){
  
var answer = $('input[name=answer]:checked', '#form').val();

console.log(answer);
    if(this.currentQIndex > 0){
      this.currentQIndex--;
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

