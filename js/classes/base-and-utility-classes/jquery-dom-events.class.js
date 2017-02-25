class JqueryDomEvents extends Array {

  constructor(){
    super();

    this.push.apply(this,[
      'blur',
      'change',
      'click',
      'contextmenu',
      'dblclick',
      'error',
      'focus',
      'focusin',
      'focusout',
      'hover',
      'keydown',
      'keypress',
      'keyup',
      'load',
      'mousedown',
      'mouseenter',
      'mouseleave',
      'mousemove',
      'mouseout',
      'mouseover',
      'mouseup',
      'ready',
      'resize',
      'scroll',
      'select',
      'submit',
      'toggle',
      'trigger',
      'unload'
    ]);
    
  }

}
