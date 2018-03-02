function addBall() {
	var getBola = document.getElementById("game");
	var bola = document.createElement("div");

	bola.setAttribute("id", "bola");
	var color = Math.floor(Math.random() * 11);

	bola.setAttribute("class", "color" + color + " bola");
	var positionOne = Math.floor(Math.random() * 1200);

	var positionTwo = Math.floor(Math.random() * 600);
	bola.setAttribute("style", "left:" + positionOne + "px;" + "top:" + positionTwo + "px;");

	bola.setAttribute("onclick", "estourar(this)");
	getBola.appendChild(bola);
}

function init() {
	addBall();
}

function estourar(element) {
	var getBola = document.getElementById("game");
	getBola.removeChild(element);
	
	points(element);
	loser(element);
}

var click = 0;
function points(element) {
	click += 1;
	document.getElementById("points").innerHTML = click;	
}

var myInterval = setInterval(function() {
	init()
}, 800);


function loser(element) {
	var loser = element.getAttribute("class", "color2");
	var verify = loser.split(" ", 1);

	if(click == 1) {
		var msgLoser = "Você fez " + click + " ponto, da pra melhorar né?";
	}

	else {
		var msgLoser = "Você fez " + click + " pontos, da pra melhorar né?";
	}

	if(verify == "color2" || verify == "color7" || verify == "color10") {

		var music = "https://www.w3schools.com/jsref/horse.mp3";

		var boom = document.getElementById("audio"); 

		var element = "<source src=" +  music + " id='audio' type='audio/mpeg'>";

		var create = boom.innerHTML = element; 

		boom.play();

		clearInterval(myInterval);
		var getBola = document.getElementById("game");
			getBola.parentNode.removeChild( getBola );

	 	return	document.getElementById("loser").innerHTML = msgLoser;
	}
}