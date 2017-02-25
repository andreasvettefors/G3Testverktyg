class Binder {

  static gettify(){
    // Replace properties with getters and setters
    for(var i in this){
      (()=>{
        var key = i, val = this[i], memId = Base.mem.indexOf(this);
        Object.defineProperty(this,i,{
          get: ()=>{ return val; },
          set: (_new)=>{
            if(val == _new){ return; }
            var s = new Date().getTime();
            val = _new;
            try { this.displayChanges(); }
            catch(e){ return; }
            Binder.resolveUpbinds();
          }
        });
      })();
    }
  }

  static upbind(path){
    return `<gnupbind data-upbind="${path}">${
      Binder.pathResolve(this,path)
    }</gnupbind>`;
  }

  static pathResolve(obj,path){
    path = path.replace(/\[(\d*)\]/g,'.$1').split('.');
    var val = obj;
    while(path.length){
      if(!val){ return undefined; }
      val = val[path.shift()];
    }
    return val;
  }

  static resolveUpbinds(){
    $('gnupbind').each(function(){
      var el = $(this);
      var path = el.attr('data-upbind');
      var p = el.closest('[data-id]');
      var instance = Base.mem[p.attr('data-id')/1];
      var val = Binder.pathResolve(instance,path);
      el.html(val || '');
    });
  }

  static listItemDomRemove(removed){
    var s = new Date().getTime();
    (removed instanceof Array ? removed : [removed]).forEach((r)=>{
      var removedId = Base.mem.indexOf(r);
      $(`[data-id="${removedId}"][data-list-id="${this.memId}"]`).remove();
    });
    Binder.resolveUpbinds();
    return removed;
  }

  static listItemDomAdd(added,pos){
    var s = new Date().getTime();
    var el = $(`[data-list-id="${this.memId}"]` + (pos/1 != pos ? `:${pos}` : ''));
    el = el.eq(pos/1 != pos ? 0 : pos);
    var template = el.attr('data-template');
    if(!template){ return; }
    el[pos == 'last' ? 'after' : 'before'](this.display(null,template,added));
    Binder.resolveUpbinds();
  }

  static listItemDomReorder(arr){
    var s = new Date().getTime();
    var el = $(`[data-list-id="${this.memId}"]:first`);
    var holder = $('<div/>'), holder2 = $('<div/>');
    holder.insertBefore(el);
    arr.forEach((item)=>{
      var itemId = Base.mem.indexOf(item);
      var el = $(`[data-list-id="${this.memId}"][data-id="${itemId}"]`);
      holder2.append(el);
    });
    holder.replaceWith(holder2);
    holder2.children().unwrap();
    Binder.resolveUpbinds();
    return arr;
  }

}
