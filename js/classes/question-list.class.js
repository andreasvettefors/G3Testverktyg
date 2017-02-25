class QuestionList extends List {

  constructor(items){
    super(Question,items);
     
  }

  readAllFromDb(id, callback){
    this.db.readAll( [id],(data)=>{
      this.push.apply(this,data);
      callback();
    });
  }

   static get sqlQueries(){
    
    return {
    
      readAll: `
       select * from questions where test_idTest = ?
      `
    }

  }
}