class AdministratorView extends Base {

	static defaultPropertyValues() {
		return {
			admin: new Administrator()
		}
	}
	constructor(propertyValues) {
		super(propertyValues);
	}



}