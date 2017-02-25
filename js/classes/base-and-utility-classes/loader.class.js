class Loader {

  constructor(){

    this.loadList = window.load;

    if(this.loadList){
      this.loadThings();
    }
    else {
     this.getLoadList();
    }
  }

  getLoadList(){
    // Get the load-list.js script
    // that defines window.toLoad
    // then create another instance of Loader
    // - write this as script tags directly...
    document.write(`
      <script src="load-list.js"></script>
      <script>new Loader();</script>
    `);
  }

  loadThings(){
    // Build the html for link and script tags
    // and write directly...
    var lastFolder = '';
    document.write(this.loadList.split('\n').map((file)=>{
      file = file.replace(/\s*/g,'');
      if(file.substr(-1) == '/'){ lastFolder = file; return; }
      if(file.indexOf('/') >= 0){ lastFolder = ''; }
      var isCss = file.substr(file.lastIndexOf('.') + 1) == 'css';
      var isEmpty = file == '';
      if(isEmpty){ return ''; }
      file = lastFolder + file;
      if(isCss){
        return '<link rel="stylesheet" href="' + file + '">';
      }
      return '<script src="' + file + '"></script>';
    }).join('\n'));
  }

}

// create an instance of Loader
new Loader();
