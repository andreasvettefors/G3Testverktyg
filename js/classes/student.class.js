class Student extends Base {

	static defaultPropertyValues() {

		return {
			idUser: 0,
			email: 'john@student.se',
			testsToDo: new StudentTestList(),
			finishedTests: new StudentFinishedTestList()
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

		var finishedTests = new StudentFinishedTestList();

		var sa = new studentAnswer();

		finishedTests.readStudentFinishedTestFromDbById(id, () => {
			if (finishedTests === undefined || finishedTests.length == 0) {
					return;
			}
			// Loop through finishedtest to find id and 
			// name of the test the teacher want to look at
			for (let i = 0; i < finishedTests.length; i++) {
				if (finishedTests[i].name == 'Java 1') {
					var name = finishedTests[i].name;
					var idTest = finishedTests[i].idTest;
				}

			}

			sa.getTestQuestionsCount(idTest, (total) => {
				sa.studentCorrectsCount(id, idTest, (correct) => {
					sa.studentGradePercentage(id, idTest, (grade) => {
						var tr = new TestResultView({
							name: name,
							student: el,
							correctAnswers: correct,
							totalQuestions: total,
							grade: grade,
							userType: 2
						});
						tr.testresultitem.readTestResultItem(id, () => {
							$('#teacherview').remove();
							tr.display('body');
						});
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