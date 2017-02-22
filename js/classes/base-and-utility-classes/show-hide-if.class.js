class ShowHideIf {
  
   static show(el){
    el.find('[data-show="false"]').hide();
    el.find('[data-hide="true"]').hide();
    el.find('[data-hide="false"]').show();
    el.find('[data-show="true"]').show();
    el.find('[data-if="false"]').each(function(){
      var me = $(this), oh = me.prop('outerHTML');
      var r = $('<false-if/>');
      r.data().oh = oh;
      me.replaceWith(r);
    });
  }

  static restoreRemovedIfs(el){
    el.find('false-if').each(function(i){
      var me = $(this), oh = me.data().oh;
      me.replaceWith(oh);
    });
  }

}