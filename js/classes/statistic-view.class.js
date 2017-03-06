class StatisticView extends Base {

	static defaultPropertyValues() {
		return {
            classes: new Class()
		}
	}
	constructor(propertyValues) {
		super(propertyValues);
	}
    
    
    showTests(e){
		
		var a = $(e.target).text();
		console.log('class',a);
		$(e.target).after($('.' + a).slideToggle("linear"));
        this.getStats(1);
        
		
	}
    
    getStats(testID){
        var classID = 1;
        var pBar = new StatisticProgressBar();
                    this.getStudentGrades(classID,testID,(element) => {
                var stats = new Statistic();
                stats.display('#statistics');
                var i = 0;
                for(i;i < element.length;i++){
                    var email = element[i].email;
                    var grade = element[i].text;;
                    pBar.display('.studentBar');
                    $('#MyElement').attr('id', 'gradeName'+i);
                    $('#MyElement2').attr('id', 'gradeBar'+i);
                    $('#gradeBar'+i).css('width', grade).attr('aria-valuenow', grade).text(grade);
                    var gradeNumber = parseInt(grade);
                    
                    if(gradeNumber>59){
                        $('#gradeBar'+i).addClass('progress-bar-success');
                    }
                     else if(gradeNumber>29){
                        $('#gradeBar'+i).addClass('progress-bar-warning');
                    }else{
                        $('#gradeBar'+i).addClass('progress-bar-danger');
                    }          
                    
                    $('#gradeName'+i).text(email);
                    
                }
                this.getUndoneTests(classID,testID,(element2) => {
                    for(var j = 0; j < element2.length;j++){
                        pBar.display('.studentBar');
                        $('#MyElement').attr('id', 'gradeName'+i);
                        $('#MyElement2').attr('id', 'notDone'+i);
                        $('#gradeName'+i).text(element2[j].email);
                        $('#notDone'+i).text('Test ej genomfört än');
                        $('#notDone'+i).addClass('progress-bar-info');
                        i++;
                        }
                    });
                this.avarageGradeCalculator(classID,testID,(element3) => {
                    pBar.display('.klassBar');
                    $('#MyElement2').attr('id', 'gradeBar');
                    var avgGrade = Math.ceil(element3);
                    $('#gradeBar').css('width', avgGrade+'%').attr('aria-valuenow', avgGrade).text(avgGrade+'%');
                    });
                 });
    }
    avarageGradeCalculator(classID,testID,callback){
        this.getStudentGrades(classID,testID,(element) => {
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
				return callback(data);
			});
		};
    static get sqlQueries(){
			return {
				getGrades: `
    select text, email from grade,users where user_idUser = idUser && classes_idClasses = ? && test_idTest =?`,
                getUndoneTests:`
    select email from test_has_users,users where user_idUser=idUser && classes_idClasses =? && test_idTest = ? && isDone=0`
        }
    }



}
