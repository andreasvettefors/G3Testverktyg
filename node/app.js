class App {

  constructor(){
    this.requireModules();
    this.createWebServer();
  }

  requireModules(){

    // Express is a npm module that creates web servers
    this.express = require('express');
    this.bodyParser = require('body-parser');
    
    // Path is a built in Node module for handling file paths
    this.path = require('path');

    // SqlQueries is a class that lets us do SQL queries
    // by scanning client side classes and setting up
    // routes to the frontend
    this.SqlQueries = require('./sql-queries.class.js');

  }

  createWebServer(){

    // Create a web server
    var server = this.express();
    server.use(this.bodyParser.json());

    // A loader for clientside static sqlQueries
    new this.SqlQueries(server);

    // Calculate the path to our root folder for client content (our parent folder)
    var basePath = this.path.normalize(
      this.path.join(__dirname,'../'.split('/').join(this.path.sep))
    );

    // Prevent visitors from seeing content in the node folder
    server.all('/node/*',function(req,res){ res.statusCode = 404; res.end(); })

    // Tell the web server to server files from the root folder 
    server.use(this.express.static(basePath));

    // If no other route rule fulfilled then return www/index.html
    server.get('*',(req,res)=>{
      res.sendFile(this.path.join(basePath,'index.html'));
    });

    // Start the web server at port 3000
    server.listen(3000,function(){
      console.log("Express Server listening on port 3000");
    });

  }

}

// Create our app
new App();
