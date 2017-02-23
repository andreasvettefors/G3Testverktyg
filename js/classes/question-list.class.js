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

  readAllFromDb(callback){
    this.db.readAll((data)=>{
      this.push.apply(this,data);
      callback();
    });
  }

   static get sqlQueries(){
    
    return {
      
      createPetOwnerWithPetsView: `
        CREATE OR REPLACE VIEW petownersWithPets 
        AS SELECT 
          petowners.id,
          petowners.firstName,
          petowners.lastName,
          petowners.birthDate,
          pets.id AS petId,
          pets.name AS petName,
          pets.birthDate AS petBirthdate 
        FROM petowners 
        LEFT JOIN pets 
        ON petowners.id = pets.owner_id
      `,
      readAll: `
        SELECT * FROM pets
      `
    }

  }
}