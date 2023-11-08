var numberToImage = {
   1: './images/dice1.png',
   2: './images/dice2.png',
   3: './images/dice3.png',
   4: './images/dice4.png',
   5: './images/dice5.png',
   6: './images/dice6.png',
 };


var number1=Math.floor(Math.random()*6)+1;
var number2=Math.floor(Math.random()*6)+1;

 var img1Element = document.querySelector('.img1');
 img1Element.src=numberToImage[number1];
 
 var img2Element = document.querySelector('.img2');
 img2Element.src=numberToImage[number2];


 if(number1>number2){
    document.querySelector("h1").innerHTML="Player 1 wins"
 }
 else if(number1<number2){
    document.querySelector("h1").innerHTML="Player 2 wins"
 }
 else {
    document.querySelector("h1").innerHTML="draw"
 }
