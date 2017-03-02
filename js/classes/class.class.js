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
		var sl = new StudentList();
		sl.readStudentData(this.idClasses,()=>{
			$(e.target).after(sl.display());
			//sl.display('.students');
                 this.avarageGradeCalculator(1,(element) => {
				console.log(element);
          }); 
			window.sl = sl;
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
    static get sqlQueries(){
			return {
				getGrades: `
    select text from grade,users where user_idUser = idUser && classes_idClasses = ? && test_idTest =?`
        }
    }
}