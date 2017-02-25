class List extends Array {

  // A list will try to convert/typeCast all its items
  // to this class when you push, unshift or splice to it

  // There is also an extra method that can push directly
  // from a JSON url containing an array of elements. 
  // This is an async action with a callback

  // If you call display for a list it will
  // call display for each item in the list

  constructor(itemClass, items = []){
    super();
    // block "internal" calls from js engines
    // (when running array.map etc)
    if(!(items instanceof Array)){return;}
    // push it to Base.mem
    Base.mem = Base.mem || [];
    Base.mem.push(this);
    // binding to DOM
    this.domRemove = Binder.listItemDomRemove;
    this.domAdd = Binder.listItemDomAdd;
    this.domReorder = Binder.listItemDomReorder;
    // assign properties
    this.itemClass = itemClass;
    this.push.apply(this,items);
  }

  push(...items){
    items = this.typeCast(items);
    this.domAdd(items,'last');
    return super.push.apply(this,items);
  }

  pop(){
    return this.domRemove(super.pop.apply(this));
  }

  unshift(...items){
    items = this.typeCast(items);
    this.domAdd(items,'first');
    return super.unshift.apply(this,items);
  }

  shift(){
    return this.domRemove(super.shift.apply(this));
  }

  splice(index,toRemove,...items){
    items = this.typeCast(items);
    this.domAdd(items,index);
    return this.domRemove(super.splice.apply(this,[index,toRemove].concat(items)));
  }

  sort(...args){
    return this.domReorder(super.sort.apply(this,args));
  }

  reverse(...args){
    return this.domReorder(super.reverse.apply(this,args));
  }

  set len(val){
    // we can not override length with a setter :( 
    var diff = this.length - val;
    if(diff >= 0){ this.splice(this.length - diff, diff); }
  }

  get len(){ return this.length; }

  typeCast(items){
    // loop through the items and typecast if necessary
    return items.map((item)=>{
      if(!(item instanceof this.itemClass)){
        return new this.itemClass(item);
      }
      return item;
    });
  }

  pushFromUrl(jsonFile,callback = ()=>{}){
    $.getJSON(jsonFile,(data)=>{
      this.push.apply(this,data);
      callback();
    });
  }

  display(selector, template = 'default',that){
    var x =  (that || this).map((item,i)=>{
      return !item.display ? '' :
        item.display().replace(/([^-])>/,`$1
          data-list-id="${this.memId}"
        >`);
    }).join('\n');
    $(selector).append(x);
    return x;
  }

  get memId(){ return Base.mem.indexOf(this); }

  get db(){ return DbConnector.db.apply(this); }


}
