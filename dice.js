// window.onload = choosePic();
// var myPic = new Array("images/dice1.png", "images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");
// function choosePic() {
//   var randomNumber1 = Math.floor(Math.random() * myPic.length);
//   document.getElementByTagName("img1").src = myPic[randomNumber1];
//
// }

//Player1
var randomNumber1 = Math.floor(Math.random()*6)+1;//numbers from 1-6
var randomImage = "dice" + randomNumber1 + ".png";//dice images from dice1.png-dice6.png
var randomImageSrc = "images/" + randomImage;//images/dice1.png-images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);

//Player2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

//if Player 1 Wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player1 Wins";
  //If player 2 wins
}else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player2 Wins";
  //If its a Draw
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
