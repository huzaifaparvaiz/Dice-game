

    
    var randomNum1 = Math.floor(Math.random()*6)+1;
   
    var randomDiceImage = "dice" + randomNum1 + ".png";
    
    var randomImageSource = "images/"+ randomDiceImage ;

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource );

             ///////////////////////////

    var randomNum2 = Math.floor(Math.random()*6)+1;

    var randomDiceImage2 = "dice" + randomNum2 + ".png";
    
    var randomImageSource2 = "images/"+ randomDiceImage2 ;
   
    var image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomImageSource2 );

    var result;
    if(randomNum1 === randomNum2){
        result = "It's a tie";

    }
    if(randomNum1 > randomNum2){
        result = "Player One won";  
    }
    if(randomNum1 < randomNum2){
        result = "Player Two won";
    }
    document.querySelector("h1").innerHTML = result;
    