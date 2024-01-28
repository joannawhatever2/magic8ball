var ball = document.getElementById('ball');
var text = document.getElementById('msg');
var btn = document.getElementById('reset');
var eye = document.getElementById('eye');
var timing;

var words = [
	"It is certain.",
	"It is decidedly so.",
	"Without a doubt.",
	"Yes definitely.",
	"You may rely on it.",
	"As I see it, yes.",
	"Most likely.",
	"Outlook good.",
	"Yes.",
	"Signs point to yes.",
	"Reply hazy, try again.",
	"Ask again later.",
	"Better not tell you now.",
	"Cannot predict now.",
	"Concentrate and ask again.",
	"Don't count on it.",
	"My reply is no.",
	"My sources say no.",
	"Outlook not so good.",
	"Very doubtful."
];

ball.onclick = reset;

function start(){
	eye.classList.add('otherSide');
}

function checkIt(elem, word) {
	if (elem.classList.contains(word)){
		return true;
	} else {
		return false;
	}
}

function reset() {
	if ( checkIt( eye, "otherSide") ) { fromTop(); }
	else if ( checkIt( eye, "fromTop") ) { toBottom(); }
}

function fromTop() {
	eye.classList.remove('otherSide');
	eye.classList.add('fromTop');
	timing = setInterval(function(){
		checkPos('a');
	}, 500);
}

function toBottom() {
	disableEnable();
	text.classList.remove('show');
	eye.classList.remove('fromTop');
	eye.classList.add('toBottom');
	timing = setInterval(function(){
		checkPos('b');
	}, 500);
}

function checkPos(letter) {
	if ( letter == 'b' && eye.offsetTop == 295 ) {
		clearInterval(timing);
		otherSide();
	} else if ( letter == 'a' && eye.offsetTop == 75 ) {
		clearInterval(timing);
		something();
	}
}

//checkItOut(interval, element, property, value, result)
function checkItOut(interval, element, property, value, result) {
	if (element.property == value) {
		clearInterval(interval);
		result();
	}
}

function otherSide() {
	eye.classList.remove('toBottom');
	eye.classList.add('otherSide');
	disableEnable();
}

function something() {
	var num = getRandInt(0, words.length - 1);
	text.innerHTML = words[num];
	text.classList.add('show');
}

function disableEnable() {
	if( btn.classList.contains('disable') ){
		btn.classList.remove('disable');
	} else {
		btn.classList.add('disable');
	}
}

function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

window.addEventListener('load', start);