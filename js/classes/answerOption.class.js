class AnswerOption extends Base {

  static defaultPropertyValues(){
    return {
      idAnswerOption: 0 ,
      answer: 'Pelle'

    }
  } 

  constructor(propertyValues){
    super(propertyValues);

   
  }
	insertInDb(callback){
    this.db.newAnswerOptions({
      idAnswerOption: this.idAnswerOption,
      answer: this.answer,
      
    },callback);
  }



  readOptionsFromDb(){
    this.db.readAnswerOptions((data) => {
                  var quest=[];
                  var a = 0;
                  data.forEach(function(element) {
                   quest[a]=element.answer
                   a++;
                       });
                  return(quest[2]);
      
                });
              
}



  static get sqlQueries(){
    return {
      newAnswerOptions: `
        INSERT answersOptions SET ?
      `,
      readAnswerOptions: `
      select * from answerOptions
      ` 
  		    

    }
  }
 
  

}

/*$(document).ready(function(){
    $(".arrow-right").click(function(){
        $("#myRadio").prop("checked", true);
    });*/


