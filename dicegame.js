"use strict"

function getPlayer1(){
	var dice1 = Math.floor((Math.random() * 4)+1);
	var dice2 = Math.floor((Math.random() * 4)+1);
	document.getElementById("diceStyle1").innerHTML=dice1;
	document.getElementById("diceStyle2").innerHTML=dice2;

}
function getPlayer2(){
	var dice3 = Math.floor((Math.random() * 4)+1);
	var dice4 = Math.floor((Math.random() * 4)+1);
	document.getElementById("diceStyle3").innerHTML=dice3;
	document.getElementById("diceStyle4").innerHTML=dice4;
}

