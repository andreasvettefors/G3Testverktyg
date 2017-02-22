class GenericDomEventHandler {

  constructor(){
    this.checkInputOn = ['change','keyup','click'];
    this.allEvents = new JqueryDomEvents().join(' ');
    this.registerHandler();
  }

  registerHandler(){

    var self = this;
    
    // Register a generic event handler
    $(document).on(this.allEvents,'*',function(e){
      
      var el = $(this);
      
      // Check for double binds to input (data-bind)
      var checkInput = 
        self.checkInputOn.indexOf(e.type) >= 0 &&
        el.attr('data-bind');
      
      // If there is a data-eventName attribute
      // on the dom element or a data-bind
      if(el.attr('data-' + e.type) || checkInput){
        self.actOnEvent(el,e,checkInput);
      }
    });

  }

  actOnEvent(el,e,checkInput){
   
    // Look up the object instance
    // related to this jQuery element
    var p = el.closest('[data-id]');
    var instance = Base.mem[p.attr('data-id')/1];
    
    // Change model value from input value
    if(checkInput){
      Base.noValDiff = true;
      instance[el.attr('data-bind')] = el.val();
      Base.noValDiff = false;
      instance.displayChanges();
    }
   
    // Use the data-eventName attribute value
    // as the method name to call for the instance
    if(!instance){ return; }
    var methodName = el.attr('data-' + e.type);
    if(!instance[methodName]){ return; }

    // Call the method
    instance.eventElement = instance.$$ = el;
    instance[methodName](e);
    delete instance.eventElement;
    delete instance.$$;
  }

}
