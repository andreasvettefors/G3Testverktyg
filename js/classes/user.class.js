class User extends Base {

	static defaultPropertyValues() {

		return {
			idUser: 0,
			email: 'john@student.se',
			authorisation: ''
		}
	}
	constructor(propertyValues) {
		super(propertyValues);
	}

}