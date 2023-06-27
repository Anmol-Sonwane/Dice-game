// code for displaying random dice images for both player1 and player2

var randomNumber1 = Math.floor(Math.random()* 6)+1;

var randomDiceImage = "dice"+randomNumber1+".png";

var randomImageSource = "Images/"+ randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = "Images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// code for displaying winner in the title of the site

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!!";
}










