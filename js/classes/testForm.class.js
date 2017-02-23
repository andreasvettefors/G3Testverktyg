class TestForm extends Base {

static defaultPropertyValues(){
  return{
  idTest: 0,
  name:'.Net',
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

console.log(answer);
    if(this.currentQIndex < this.questions.length){
      this.currentQIndex++;
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