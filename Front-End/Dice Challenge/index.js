var random1=Math.floor(Math.random()*6)+1;

var randomDiceImage="images/dice"+random1+".png"

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",randomDiceImage);

var random2=Math.floor(Math.random()*6+1);

var randomDiceImage2="images/dice"+random2+".png"

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",randomDiceImage2);

if(random1>random2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}

else if(random1<random2){
    document.querySelector("h1").innerHTML="🚩Player 2 Wins";
}

else {
    document.querySelector("h1").innerHTML="Ties between both";
}