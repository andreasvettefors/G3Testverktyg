class QuestionList extends List {

  constructor(items){
    super(Question,items);
     
  }


  writeToDb(callback){
    var co = 0, listLength = this.length;
    function callbackEach(res){
      co++;
      if(co == listLength){ callback(); }
    }
    for(let question of this){
      question.insertInDb(callbackEach);
    }
  }

  readAllFromDb(){
    this.db.readAll((data)=>{
      this.push.apply(this,data);
      
    });
  }

   static get sqlQueries(){
    
    return {
    
      readAll: `
       select * from questions
      `
    }

  }
}