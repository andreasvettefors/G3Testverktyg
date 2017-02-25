module.exports = class SqlQueries {

  constructor(expressServer){
    this.mysql = require('mysql');
    this.path = require('path');
    this.fs = require('fs');
    this.server = expressServer;
    this.dbCreds = require('./db-credentials.json');
    this.db = this.mysql.createConnection(this.dbCreds);
    var fnames = this.getFileNames(this.path.join('..','js'),(files)=>{
      this.parser(files);
    });
  }

  parser(files){
    var Fake = class Fake {};
    for(let file of files){
      let x = this.fs.readFileSync(file,'utf8');
      if(x.indexOf('class') === 0){
        let evld;
        x = x.replace(/extends \S*/g,'extends Fake');
        try {
          eval('evld = ' + x);
        }
        catch(e){ continue; }
        let className = evld.name.toLowerCase();
        let queries = evld.sqlQueries;
        for(let qname in queries){
          (()=>{
            var query = queries[qname];
            this.server.post(
              '/api/' + className + '/' + qname.toLowerCase(), 
              (req,res)=>{
                this.db.query(query,req.body,(err,result)=>{
                  if(err){
                    res.json({error:err});
                  }
                  else {
                    res.json(result);
                  }
                });
              }
            );
          })();
        }
      }
    }
  }

  getFileNames(path,callback){
    // Read a folder recursively looking for js files
    var _path = this.path, fs = this.fs;
    var base = {__count:0, arr: []};
    recursiveReadDir(path);

    // Recursor
    function recursiveReadDir(path){
      base.__count++;
      fs.readdir(path,function(err,x){
        base.__count--;
        for(var j = 0; j < x.length; j++){
          var i = x[j];
          if(i.indexOf(".") < 0 && !err){
            recursiveReadDir(_path.join(path,i),callback);
          }
          else if (i.indexOf(".js") > 0){
            base.arr.push(_path.join(path,i));
          }
        }
        if(base.__count === 0){callback(base.arr);}
      });
    }
  }
}