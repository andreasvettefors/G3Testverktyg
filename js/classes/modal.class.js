class Modal extends Base {

	static defaultPropertyValues() {
		return {
			content: 'This is important!',
			okButton: 'Ok'
		}
	}

	constructor(propertyValues = {}) {
		super(propertyValues);
		// display the modal
		this.display('body');
		$(this.$.modal('show'));
		// remove the dom element on hide
		this.$.on('hidden.bs.modal', () => {
			this.$.remove();
		});
	}

}