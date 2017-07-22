"use strict"

function getPlayer1(){
	
	var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var roll = document.getElementById("roll");
    var myDice1 = Math.floor(Math.random() * 4) + 1;
    var myDice2 = Math.floor(Math.random() * 4) + 1;
    var total = myDice1 + myDice2;
    die1.innerHTML = myDice1;
    die2.innerHTML = myDice2;
    roll.innerHTML = "Your Score = "+total;
    if(total===2){
        roll.innerHTML += " SNAKE EYES!";
        new Audio("../toasty.mp3").play();
	}
}
	


function getPlayer2(){
	var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var roll2 = document.getElementById("roll2");
    var myDice3 = Math.floor(Math.random() * 4) + 1;
    var myDice4 = Math.floor(Math.random() * 4) + 1;
    var total = myDice3 + myDice4;
    die3.innerHTML = myDice3;
    die4.innerHTML = myDice4;
    roll2.innerHTML = "Your Score = "+total;
    if(total===2){
        roll2.innerHTML += " SNAKE EYES!";
        new Audio("../toasty.mp3").play();
	}
}
