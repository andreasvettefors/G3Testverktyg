class Class extends Base {

	static defaultPropertyValues() {

		return {
			idClasses: 0,
			name: 'A special class'
		}
	}
	constructor(propertyValues) {
		super(propertyValues);

	}
	
	showStudentsInClass(e){
		$('.studentlink').remove();
        $('.stats').remove();
		var sl = new StudentList();
        var stats = new Statistic();
        var pBar = new StatisticProgressBar();
		sl.readStudentData(this.idClasses,()=>{
			$(e.target).after(sl.display());
            var stats = new Statistic();
            stats.display('#statistics');
            this.getStudentGrades(1,1,(element) => {
                for(var i = 0; i < element.length;i++){
                    var email = element[i].email;
                    var grade = element[i].text;
                    pBar.display('.klassBar');
                    //document.getElementById("MyElement").className.replace('gradeName'+i);
                    document.getElementById("MyElement").className = "gradeName"+i;
                    $('.gradeBar'+i).css('width', grade).attr('aria-valuenow', grade).text(grade);
                    $('.gradeName'+i).text(email);
                }
                 });
            //$('.gradeBar').css('width', gradePerc+'%').attr('aria-valuenow', gradePerc).text(gradePerc+'%');
			//sl.display('.students');
                 this.avarageGradeCalculator(1,(element) => {
				console.log(element+'% medelvärde');
                     this.getUndoneTests(this.idClasses,1,(element1) => {
                         if(element1>0){
                         console.log(element1+' has not finnished the test yet');
                         }
                     });
          }); 
		});
	}
    avarageGradeCalculator(testID,callback){
        this.getStudentGrades(this.idClasses,testID,(element) => {
                var avgGrade=0;
                  for(var i = 0; i < element.length;i++){
                   var grade=parseInt(element[i].text);
                      avgGrade+=grade;
                }
                avgGrade/=element.length;
                return callback(avgGrade);
          }); 
    }
	getStudentGrades(classID,testID,callback) {
        this.db.getGrades([classID,testID],(data) => {
				return callback(data);
			});
		};
    getUndoneTests(classID,testID, callback) {
			var a = 0;
			this.db.getUndoneTests([classID,testID], (data) => {
				data.forEach(function (element) {
					a++;
				});
				return callback(a);
			});
		};
    static get sqlQueries(){
			return {
				getGrades: `
    select text, email from grade,users where user_idUser = idUser && classes_idClasses = ? && test_idTest =?`,
                getUndoneTests:`
    select isDone from test_has_users,users where user_idUser=idUser && classes_idClasses =? && test_idTest = ? && isDone=0`
        }
    }
}