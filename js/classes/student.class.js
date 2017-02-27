class Student extends Base {

	static defaultPropertyValues() {

		return {
			idUser: 0,
			email: 'john@student.se',
			testsToDo: new StudentTestList(),
			finishedTests:new StudentFinishedTestList()
		}
	}
	constructor(propertyValues) {
		super(propertyValues);

	}

	showTestResults(e) {
		var el = $(e.target).text();
		for (var item of sl) {
			if (el === item.email) {
				var id = item.idUser;
			}
		}

		var sa = new studentAnswer();
		sa.getTestQuestionsCount(1, (total) => {
			sa.studentCorrectsCount(id, 1, (correct) => {
				sa.studentGradePercentage(id, 1,(grade) => {
					var tr = new TestResultView({
						student: el,
						correctAnswers: correct,
						totalQuestions: total,
						grade: grade
					});
					tr.testresultitem.readTestResultItem(id, () => {
						$('#teacherview').remove();
						tr.display('body');
					});
				});
			});

		});

	}

	readStudentFromDbById(id, callback) {
		this.db.readStudentData([id], (data) => {

			this.idUser = data[0].idUser;
			this.email = data[0].email;
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readStudentData: `
       SELECT idUser,email FROM users where idUser = ?;
      `
		}
	}

}