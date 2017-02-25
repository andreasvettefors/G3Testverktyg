class DbConnector {
  
  static db(){
    var _class = this.constructor;
    var className = _class.name;
    if(_class.dbqs){ return _class.dbqs; }
    var obj = {};
    for(var i in _class.sqlQueries){
      (()=>{
        var qname = i;
        obj[i] = (data,callback)=>{
          if(typeof data == "function"){
            callback = data;
            data = {};
          }
          callback = callback || function(){};
          $.ajax({
            url: ('/api/' + className + '/' + qname).toLowerCase(),
            type: "POST",
            dataType: "json",
            // don't process the request body
            processData: false,
            // and tell Node that it is raw json
            headers: {"Content-Type": "application/json"},
            // the request body
            data: JSON.stringify(data),
            // callback functions
            success: callback,
            error: function(error){
              callback({_error:error.responseJSON});
            }
          });
        };
      })();
    }
    _class.dbqs = obj;
    return obj;
  }

}