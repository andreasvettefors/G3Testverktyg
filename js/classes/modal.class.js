class Modal extends Base {

  static defaultPropertyValues(){
    return {
      title: 'A modal title',
      content: 'This is important!',
      cancelButton: 'Cancel',
      okButton: 'Ok'
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
    // display the modal
    this.display('body');
    $(this.$.modal('show'));
    // remove the dom element on hide
    this.$.on('hidden.bs.modal',()=>{
      this.$.remove();
    });
  }

}