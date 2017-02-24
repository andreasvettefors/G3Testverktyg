function dateTimeForMySQL(d){
  return new Date(d).toISOString().slice(0, 19).replace('T', ' ');
}



$(()=>{new App()});

