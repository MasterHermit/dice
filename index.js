
//image1

var random1 = (Math.floor(Math.random()*6)+1);

var image1 = "dice" + random1 + ".png";

var randomImg1 = "images/" + image1;

var img1= document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImg1);
  
//image2

var random2 = (Math.floor(Math.random()*6)+1);

var image2 = "dice" + random2 + ".png";

var randomImg2 = "images/" + image2;

var img2= document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImg2);

//h1

if(random1 > random2){
    document.querySelector("h1").innerHTML="🎉player 1 won";
}
else if(random1 < random2) {
    document.querySelector("h1").innerHTML="🎉player 2 won";
}
else {
    document.querySelector("h1").innerHTML="🤦‍♂️ draw";
}