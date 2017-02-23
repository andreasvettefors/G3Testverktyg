class studentAnswer extends Base {

  constructor(propertyValues = {}){
    super(propertyValues);
  }
message(){

              var answer = $('button').val();
                var email = $('.inputPassword').val();

              console.log('hej du har klickat på mig! '+ email);


}

readAllFromDb() {
  this.db.readAll((data) => {
  console.log(data);
  });
}

addAnswer(userID,answerID,questionID){
    // Just an example of how to run a query
    this.db.newAnswer([userID,answerID,questionID],(data)=>{
      console.log('Result of the query "byFullName"',data);
    });
  }
amountOfQuestions(testID){
    this.db.testQuestionsCount([testID],(data)=>{
        console.log('Amount of questions in this test:',data);
        var returnedData = data;
        return returnedData;
    })
    
}
amountOfCorrects(testID){
    this.db.correctStudentAnswers([testID],(data)=>{
        console.log('Amount of student corrects:',data);
    })
    
}
getStudentGrade(){
  var a= this.getTestQuestionsCount(1);
    var b = this.getStudentCorrectsCount(1,1);
    console.log(a);
    var returnNum = (b/a*100)+'%';
    console.log(returnNum);
    return returnNum;
    
    
}
getTestQuestionsCount(testID){
    var a = 0; 
this.db.testQuestionsCount([testID],(data) => {

                  data.forEach(function(element) {
                      a++;
                      if(element.length == a){
                          return a;
                      }
                      
                      
                  });
                        console.log(a);
                        
                });
};
getStudentCorrectsCount(userID,testID){
this.db.correctStudentAnswers([userID,testID],(data) => {
var a = 0;
                  data.forEach(function(element) {
                      a++;
                  });
                        return a;
                });
};
    
static get sqlQueries() {
  return {
    readAll: `
     SELECT * FROM users;
    `,
      newAnswer:`
    insert into studentanswers (user_idUser, answeroptions_idAnswerOption, answeroptions_questions_idQuestion) values (?,?,?) `,
      testQuestionsCount:`
    select * from questions where test_idTest=?`,
      correctStudentAnswers:`
    select * from answeroptions, studentanswers where user_idUser=? &&questions_Test_idTest = ? && answerOptions_idAnswerOption = idAnswerOption && isCorrect = true`
  }
}
}