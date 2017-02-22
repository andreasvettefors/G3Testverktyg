function dateTimeForMySQL(d){
  return new Date(d).toISOString().slice(0, 19).replace('T', ' ');
}

// Create the app on DOM ready
$(()=>{new App()});