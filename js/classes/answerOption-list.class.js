class AnswerOptionList extends List {

  constructor(items){
    super(AnswerOption,items);
     
  }

  readFromDb(id,callback){
    this.db.readAnswerOptions([id],(data)=>{
      this.push.apply(this,data);
      callback();
    });
  }

   static get sqlQueries(){
    
    return {
      readAnswerOptions: `
       select answer,idAnswerOption from answerOptions where questions_idQuestion = ?
      `
    }

  }
}