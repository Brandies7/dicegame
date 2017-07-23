"use strict"

function getGame1Player1(){
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
function getGame1Player2(){
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
function getGame2Player1(){
	var die5 = document.getElementById("die5");
    var die6 = document.getElementById("die6");
    var roll3 = document.getElementById("roll3");
    var myDice1 = Math.floor(Math.random() * 6) + 1;
    var myDice2 = Math.floor(Math.random() * 6) + 1;
    var total = myDice1 + myDice2;
    die5.innerHTML = myDice1;
    die6.innerHTML = myDice2;
    roll3.innerHTML = "Your Score = "+total;
    if(total===7||total===11){
        roll3.innerHTML += " YOU LOOSE!";
        new Audio("../youloose.wav").play();
        
	}
}
function getGame2Player2(){
	var die7 = document.getElementById("die7");
    var die8 = document.getElementById("die8");
    var roll4 = document.getElementById("roll4");
    var myDice1 = Math.floor(Math.random() * 6) + 1;
    var myDice2 = Math.floor(Math.random() * 6) + 1;
    var total = myDice1 + myDice2;
    die7.innerHTML = myDice1;
    die8.innerHTML = myDice2;
    roll4.innerHTML = "Your Score = "+total;
    if(total===7||total===11){
    	roll4.innerHTML += " YOU LOOSE!";
        new Audio("../youloose.wav").play();
        
	}
}
function getGame3Player1(){
	var die1 = document.getElementById("die9");
    var die2 = document.getElementById("die10");
    var roll = document.getElementById("roll5");
    var myDice1 = Math.floor(Math.random() * 8) + 1;
    var myDice2 = Math.floor(Math.random() * 8) + 1;
    var total = myDice1 + myDice2;
    die1.innerHTML = myDice1;
    die2.innerHTML = myDice2;
    roll.innerHTML = "Your Score = "+total;
    if(total===2){
        roll.innerHTML += " SNAKE EYES!";
        new Audio("../toasty.mp3").play();
	}
}
function getGame3Player2(){
	var die1 = document.getElementById("die11");
    var die2 = document.getElementById("die12");
    var roll = document.getElementById("roll6");
    var myDice1 = Math.floor(Math.random() * 8) + 1;
    var myDice2 = Math.floor(Math.random() * 8) + 1;
    var total = myDice1 + myDice2;
    die1.innerHTML = myDice1;
    die2.innerHTML = myDice2;
    roll.innerHTML = "Your Score = "+total;
    if(total===2){
        roll.innerHTML += " SNAKE EYES!";
        new Audio("../toasty.mp3").play();
	}
}
function getGame4Player1(){
	var die1 = document.getElementById("die13");
    var die2 = document.getElementById("die14");
    var roll = document.getElementById("roll7");
    var myDice1 = Math.floor(Math.random() * 10) + 1;
    var myDice2 = Math.floor(Math.random() * 10) + 1;
    var total = myDice1 + myDice2;
    die1.innerHTML = myDice1;
    die2.innerHTML = myDice2;
    roll.innerHTML = "Your Score = "+total;
    if(total===2){
        roll.innerHTML += " SNAKE EYES!";
        new Audio("../toasty.mp3").play();
	}
}
function getGame4Player2(){
	var die1 = document.getElementById("die15");
    var die2 = document.getElementById("die16");
    var roll = document.getElementById("roll8");
    var myDice1 = Math.floor(Math.random() * 10) + 1;
    var myDice2 = Math.floor(Math.random() * 10) + 1;
    var total = myDice1 + myDice2;
    die1.innerHTML = myDice1;
    die2.innerHTML = myDice2;
    roll.innerHTML = "Your Score = "+total;
    if(total===2){
        roll.innerHTML += " SNAKE EYES!";
        new Audio("../toasty.mp3").play();
	}
}
function getGame5Player1(){
	var die1 = document.getElementById("die17");
    var die2 = document.getElementById("die18");
    var roll = document.getElementById("roll9");
    var myDice1 = Math.floor(Math.random() * 12) + 1;
    var myDice2 = Math.floor(Math.random() * 12) + 1;
    var total = myDice1 + myDice2;
    die1.innerHTML = myDice1;
    die2.innerHTML = myDice2;
    roll.innerHTML = "Your Score = "+total;
    if(total===2){
        roll.innerHTML += " SNAKE EYES!";
        new Audio("../toasty.mp3").play();
	}
}
function getGame5Player2(){
	var die3 = document.getElementById("die19");
    var die4 = document.getElementById("die20");
    var roll2 = document.getElementById("roll10");
    var myDice3 = Math.floor(Math.random() * 12) + 1;
    var myDice4 = Math.floor(Math.random() * 12) + 1;
    var total = myDice3 + myDice4;
    die3.innerHTML = myDice3;
    die4.innerHTML = myDice4;
    roll2.innerHTML = "Your Score = "+total;
    if(total===2){
        roll2.innerHTML += " SNAKE EYES!";
        new Audio("../toasty.mp3").play();
	}
}
function getGame6Player1(){
	var die1 = document.getElementById("die21");
    var die2 = document.getElementById("die22");
    var roll = document.getElementById("roll11");
    var myDice1 = Math.floor(Math.random() * 20) + 1;
    var myDice2 = Math.floor(Math.random() * 20) + 1;
    var total = myDice1 + myDice2;
    die1.innerHTML = myDice1;
    die2.innerHTML = myDice2;
    roll.innerHTML = "Your Score = "+total;
    if(total===2){
        roll.innerHTML += " SNAKE EYES!";
        new Audio("../toasty.mp3").play();
	}
}
function getGame6Player2(){
	var die1 = document.getElementById("die23");
    var die2 = document.getElementById("die24");
    var roll = document.getElementById("roll12");
    var myDice1 = Math.floor(Math.random() * 20) + 1;
    var myDice2 = Math.floor(Math.random() * 20) + 1;
    var total = myDice1 + myDice2;
    die1.innerHTML = myDice1;
    die2.innerHTML = myDice2;
    roll.innerHTML = "Your Score = "+total;
    if(total===2){
        roll.innerHTML += " SNAKE EYES!";
        new Audio("../toasty.mp3").play();
	}
}
function goHome(){
    var home=location.href="index1.html";
    document.getElementById("button6").innerHTML=home;
}
