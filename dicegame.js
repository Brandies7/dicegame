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
        roll3.innerHTML += " YOU LOSE!";
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
    	roll4.innerHTML += " YOU LOSE!";
        new Audio("../youloose.wav").play();
        
	}
}
function getGame3Player1(){
	var die9 = document.getElementById("die9");
    var die10 = document.getElementById("die10");
    var roll5 = document.getElementById("roll5");
    var myDice1 = Math.floor(Math.random() * 8) + 1;
    var myDice2 = Math.floor(Math.random() * 8) + 1;
    var total = myDice1 + myDice2;
    die9.innerHTML = myDice1;
    die10.innerHTML = myDice2;
    roll5.innerHTML = "Your Score = "+total;
	if(total%2===0){
        roll5.innerHTML += " Is Even!";
        new Audio("../manamana.mp3").play();
    }else{
        roll5.innerHTML += " Is Odd!"; 
    }
}
function getGame3Player2(){
	var die11 = document.getElementById("die11");
    var die12 = document.getElementById("die12");
    var roll6 = document.getElementById("roll6");
    var myDice1 = Math.floor(Math.random() * 8) + 1;
    var myDice2 = Math.floor(Math.random() * 8) + 1;
    var total = myDice1 + myDice2;
    die11.innerHTML = myDice1;
    die12.innerHTML = myDice2;
    roll6.innerHTML = "Your Score = "+total;
    if(total%2===0){
        roll6.innerHTML += " Is Even!";
        new Audio("../manamana.mp3").play();
    }else{
        roll6.innerHTML += " Is Odd!";
    }
}
function getGame4Player1(){
	var die13 = document.getElementById("die13");
    var die14 = document.getElementById("die14");
    var roll7 = document.getElementById("roll7");
    var myDice1 = Math.floor(Math.random() * 10) + 1;
    var myDice2 = Math.floor(Math.random() * 10) + 1;
    var total = myDice1 + myDice2;
    die13.innerHTML = myDice1;
    die14.innerHTML = myDice2;
    roll7.innerHTML = "Your Score = "+total;
    if(total%3===0){
        roll7.innerHTML += " FIZZZZZ!"
        new Audio("../fizzing1.mp3").play();
    }
}

function getGame4Player2(){
	var die15 = document.getElementById("die15");
    var die16 = document.getElementById("die16");
    var roll8 = document.getElementById("roll8");
    var myDice1 = Math.floor(Math.random() * 10) + 1;
    var myDice2 = Math.floor(Math.random() * 10) + 1;
    var total = myDice1 + myDice2;
    die15.innerHTML = myDice1;
    die16.innerHTML = myDice2;
    roll8.innerHTML = "Your Score = "+total;
    if(total%3===0){
        roll8.innerHTML += " FIZZZZZ!"
        new Audio("../fizzing1.mp3").play();
    }
}
function getGame5Player1(){
	var die17 = document.getElementById("die17");
    var die18 = document.getElementById("die18");
    var roll9 = document.getElementById("roll9");
    var myDice1 = Math.floor(Math.random() * 12) + 1;
    var myDice2 = Math.floor(Math.random() * 12) + 1;
    var total = myDice1 + myDice2;
    die17.innerHTML = myDice1;
    die18.innerHTML = myDice2;
    roll9.innerHTML = "Your Score = "+total;
    if(myDice1%2>=1&&myDice2%2===0){
        roll9.innerHTML += " Your A Winner!"
        new Audio("../clapping.mp3").play();
    }
}
function getGame5Player2(){
	var die19 = document.getElementById("die19");
    var die20 = document.getElementById("die20");
    var roll10 = document.getElementById("roll10");
    var myDice3 = Math.floor(Math.random() * 12) + 1;
    var myDice4 = Math.floor(Math.random() * 12) + 1;
    var total = myDice3 + myDice4;
    die19.innerHTML = myDice3;
    die20.innerHTML = myDice4;
    roll10.innerHTML = "Your Score = "+total;
    if(myDice3%2>=1&&myDice4%2===0){
        roll10.innerHTML += " Your A Winner!"
        new Audio("../clapping.mp3").play();
    }
}
function getGame6Player1(){
	var die21 = document.getElementById("die21");
    var die22 = document.getElementById("die22");
    var roll11 = document.getElementById("roll11");
    var myDice1 = Math.floor(Math.random() * 20) + 1;
    var myDice2 = Math.floor(Math.random() * 20) + 1;
    var total = myDice1 + myDice2;
    die21.innerHTML = myDice1;
    die22.innerHTML = myDice2;
    roll11.innerHTML = "Your Score = "+total;
    if(myDice1===myDice2&&myDice1%2>=1&&myDice2%2>=1){
        roll11.innerHTML += " GREAT JOB!";
        new Audio("../jokedrum.wav").play();
	}
}
function getGame6Player2(){
	var die23 = document.getElementById("die23");
    var die24 = document.getElementById("die24");
    var roll12 = document.getElementById("roll12");
    var myDice1 = Math.floor(Math.random() * 20) + 1;
    var myDice2 = Math.floor(Math.random() * 20) + 1;
    var total = myDice1 + myDice2;
    die23.innerHTML = myDice1;
    die24.innerHTML = myDice2;
    roll12.innerHTML = "Your Score = "+total;
    if(myDice1===myDice2&&myDice1%2>=1&&myDice2%2>=1){
        roll12.innerHTML += " GREAT JOB!";
        new Audio("../jokedrum.wav").play();
	}
}
function goHome(){
    var home=location.href="index1.html";
    document.getElementById("button6").innerHTML=home;
}
function getDropDownMenu() {
    document.getElementById("drpdwn").classList.toggle("show");
}
