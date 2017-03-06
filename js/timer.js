var pos = 0,
  test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [

  ["What is the default value of Java datatype boolean?", "true", "false", "0", "A"]
];

function renderQuestion() {
  test = _("test");

  if (pos >= questions.length) {
    var showscore = Math.floor(correct / questions.length * 100);
    var minuteleft = parseInt((totalsecoriginal - totalsec) / 60, 10);
    var sec = (totalsecoriginal - totalsec) - (minuteleft * 60);

    clearTimeout(tim);
    return false;
  }
}

var tim;
var showscore = Math.floor(correct / questions.length * 100);
var totalsec = 300; /*sets the time on the timer*/
var totalsecoriginal = totalsec;
var f = new Date();

function starttime() {
  showtime();

  var showcurtime = moment();
  var curtimeformat = showcurtime.format('h:mm:ss a');
  var showendtime = showcurtime.add(totalsec, 's');
  var endtimeFormat = showendtime.format('h:mm:ss a');
}

function showtime() {
  console.log('showtime');
  // first check if exam finished
  if (pos >= questions.length) {
    clearTimeout(tim);
    return;
  }

  // 1 seconde eraf
  totalsec--;

  var min = parseInt(totalsec / 60, 10);
  var sec = totalsec - (min * 60);

  if (parseInt(sec) > 0) {
    document.getElementById("showtime").innerHTML = "Tid kvar: " + min + "m " + sec + "s";
    tim = setTimeout("showtime()", 1000);
  } else {
    if (parseInt(sec) == 0) {
      document.getElementById("showtime").innerHTML = "Tid kvar: " + min + "m " + sec + "s";
      if (parseInt(min) == 0) {
        clearTimeout(tim);
        alert("Time Up");

        window.location.href = "Loginpage.htm";
      } else {
        document.getElementById("showtime").innerHTML = "Tid kvar: " + min + "m " + sec + "s";
        tim = setTimeout("showtime()", 1000);
      }
    }
  }
}