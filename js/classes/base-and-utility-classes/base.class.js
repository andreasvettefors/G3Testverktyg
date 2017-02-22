class Base {

  static defaultPropertyValues(){
    // Default properties (expand in child classes)
    return {};
  }

  constructor(propertyValues){

    // Register a generic DOM event handler (once)
    Base.handler = Base.handler || new GenericDomEventHandler();

    // Push this instance to a "global" memory
    Base.mem = Base.mem || [];
    Base.mem.push(this);

    // Assign properties to this instance, use default
    // values if we are missing specific values
    Object.assign(
      this,
      this.constructor.defaultPropertyValues(),
      propertyValues
    );
    delete this.autoCreateListClass;
    Binder.gettify.apply(this);

  }

  static addTemplate(name,method){
    this.templates = this.templates || {};
    this.templates[name] = method;
  }

  display(selector, template = 'default'){
    var s = new Date().getTime();
    
    // Check if a template is registrered
    // and if so run it
    var _class = this.constructor;
    var t = _class.templates[template];
    
    // If so call it with as if it were
    // an instance method
    var rendered = t ? t.apply(this) : ''; // adopt for multi template!!
    this.lastRendered = rendered; // adopt for multi template!!!
    var id = Base.mem.indexOf(this);
    
    // Attributes to link instance + template
    rendered = rendered.replace(/([^-])>/,`$1
      data-id="${id}"
      data-template="${template}"
    >`);
    
    // Append to th DOM
    if(selector && selector != '__disp_change__'){
      this.appendTemplateToDom(selector,rendered);
    }

    // Also return the rendered html
    // (for use within templates + for debugging)
    return rendered;
  }

  displayChanges(){
    var dd = new diffDOM({valueDiffing:!Base.noValDiff});
    var el = this.$;  // adopt for multitemplate!!!
    var _old = this.lastRendered;
    var _new = this.display('__disp_change__',el.attr('data-template'));
    var diff = dd.diff(
      $(_old).get(0),
      $(_new).get(0)
    );
    ShowHideIf.restoreRemovedIfs(el);
    dd.apply(el.get(0),diff);
    ShowHideIf.show(el);
  }

  appendTemplateToDom(selector,rendered){
    // Append the result to the chosen selector using jQuery
    if(selector){
      var el = $(rendered);
      // append in the DOM
      if($.isReady){ el.appendTo(selector); ShowHideIf.show(el); }
      else { $(()=>{ el.appendTo(selector); ShowHideIf.show(el); }); }
    }
  }

  upbind(path){ return Binder.upbind.apply(this,[path]); }

  get $() {
    return $(`[data-id="${Base.mem.indexOf(this)}"]`);
  }

  get db(){ return DbConnector.db.apply(this); }

}
