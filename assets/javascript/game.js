// Beginning of Game
//4 crystals will need to have a random result
//Each crystal needs a random number from 1-12
//A new random number should generate every single time we win or lose 
//When clicking a random crystal, add from previous score until it hits the target score
//if it is greather than the random result, decrement loss count
//if it is equal, we increment win count
//if it does not equal targeted score, then game resets


// Set up Global variables
var randScore = 0;
var winCount;
var lossCount;


$(document).ready(function (){


 var randTarget = Math.floor(Math.random() * 101) + 19;

//  console.log(randTarget); 

$(".score").html("Target Score: " + randTarget);

var yourScore = Math.floor(Math.random() * 11) + 1;

$(".totalscore").html("Your score: " + yourScore);

// console.log(numOptions)


for (i = 0; i < 4; i++) {
    var imageCrystal = $("#crystal");
    imageCrystal.addClass("data-random-value");
    $("#crystal").append(imageCrystal);

}


$("#crystal").on('click', function() {
    var result = ($(this).attr("data-random-value"));
    result = parseInt(result);
    yourScore += result;
    console.log(result);

if (yourScore === randTarget) {
    $(".totalscore").html("Win: " + winCount++);

}

else if (yourScore >= randTarget) {
    $(".totalscore").html("You lose: " + lossCount++)
    $(".totalscore").empty();
    // console.log(alert)
}

});

});






