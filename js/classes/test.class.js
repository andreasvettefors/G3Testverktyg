class Test extends Base {

	static defaultPropertyValues() {

		return {
			idTest: 0,
			name: 'test',
		}
	}
	constructor(propertyValues) {
		super(propertyValues);
	}
    	readTestData(id, callback) {
		this.db.readTeacherData([id], (data) => {
			this.idTest = data[0].idTest;
			this.name = data[0].name;
			callback();
		});
	}



	static get sqlQueries() {
		return {
			readTestData: `
       SELECT idTest,name FROM test where idTest=?;
      `
		}
	}
}