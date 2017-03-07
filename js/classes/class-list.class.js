class ClassList extends List {

	constructor(items) {
		super(Class, items);
	}

	readClassData(callback) {
		this.db.readClassData((data) => {
			this.push.apply(this, data);
			callback();
		});
	}

		static get sqlQueries() {
		return {
			readClassData: `
       SELECT * FROM classes LIMIT 3
      `
		}
	}
}

