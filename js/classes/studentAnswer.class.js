class studentAnswer extends Base {

  constructor(propertyValues = {}){
    super(propertyValues);
  }
            /*
           HUR MAN KALLAR CALLBACK METODER UTANFÖR DENNA KLASS
           var a = new studentAnswer();
      a.studentGradePercentage(1,1, (element) => {
            //VÄRDET FINNS I "ELEMENT"
				console.log(element);
          }); 
          */
    
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
    addGrade(gradeText,testID,userID){
    // Just an example of how to run a query
    this.db.newGrade([gradeText,testID,userID],(data)=>{
      console.log('Result of the query "byFullName"',data);
    });
  }
getStudentGrade(a,b,callback){
    var returnNum = (b/a*100)+'%';
    return callback(returnNum);
}
getTestQuestionsCount(testID,callback){
    var a = 0; 
this.db.testQuestionsCount([testID],(data) => {

                  data.forEach(function(element) {
                       a++;
                  });
                        return callback(a);
                });
};
studentCorrectsCount(userID,testID,callback){
this.db.correctStudentAnswers([userID,testID],(data) => {
var b = 0;
                  data.forEach(function(element) {
                      b++;
                  });
                       return callback(b);
   
                });
};
studentGradePercentage(userID,testID,callback){
          this.studentCorrectsCount(userID,testID, (element) => {
                             this.getTestQuestionsCount(testID,(element1) => {
						 this.getStudentGrade(element1,element,(element2) => {
                             return callback(element2);
					});
                });
          }); 
}
    
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
    select * from answeroptions, studentanswers where user_idUser=? &&questions_Test_idTest = ? && answerOptions_idAnswerOption = idAnswerOption && isCorrect = true`,
      newGrade:`
    insert into grade (text,test_idTest,user_idUser) values (?,?,?);
    `
  }
}
}