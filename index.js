
// var button=document.querySelector("button");

//player 1
var diceNumber1=Math.floor(Math.random()*6)+1;

var diceimg1="images/"+"dice"+diceNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",diceimg1);

//player 2

var diceNumber2=Math.floor(Math.random()*6)+1;

var diceimg2="images/"+"dice"+diceNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",diceimg2);


if(diceNumber1>diceNumber2)
document.querySelector("h1").innerHTML="Player 1 Win 🎊";

else if(diceNumber1===diceNumber2)
document.querySelector("h1").innerHTML="Match Draw";

else
document.querySelector("h1").innerHTML="Player 2 Win 🎊";