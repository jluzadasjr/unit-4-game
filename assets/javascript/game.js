// Beginning of Game
//4 crystals will need to have a random result
//Each crystal needs a random number from 1-12
//A new random number should generate every single time we win or lose 
//When clicking a random crystal, add from previous score until it hits the target score
//If it is greather than the random result, decrement loss count
//If it is equal, we increment win count
//If it does not equal targeted score, then game resets

$(document).ready(function (){
    var randTarget = Math.floor(Math.random() * 101) + 19;
    // console.log(randTarget);

    $("#scoretarget").html("Target Total: " + randTarget);

    var crystal1= Math.floor(Math.random() * 11) + 1;
    var crystal2= Math.floor(Math.random() * 11) + 1;
    var crystal3= Math.floor(Math.random() * 11) + 1;
    var crystal4= Math.floor(Math.random() * 11) + 1;


// Set up global variables

    var yourTotal = 0;
    var winCount = 0;
    var lossCount = 0;

    $("#record").html("Wins: " + "<br>" + "<br>" + "Losses: ");

    $(".totalscore").html("Your Score: ");

// Function to restart the game
    function restart () {
        random = Math.floor(Math.random() * 102 + 19)
        // console.log(random)
        $("#scoretarget").html("Total Target: " + random); 
        crystal1 = Math.floor(Math.random() * 11) + 1;
        crystal2 = Math.floor(Math.random() * 11) + 1;
        crystal3 = Math.floor(Math.random() * 11) + 1;
        crystal4 = Math.floor(Math.random() * 11) + 1;
        yourTotal = 0;
        $("#scoretarget").html("Total Target: " + random);
        $(".totalscore").html("Your Score: " + yourTotal);
    }

//Show that the player wins
function winner () {
    winCount++;
    $("#record").html("Wins: " + winCount + "<br>" + "<br>" + "Losses: " + lossCount);
    restart();
    };
   
//Show that the player loses
function loser () {
    lossCount++;
    $("#record").html("Wins: " + winCount + "<br>" + "<br>" + "Losses: " + lossCount);
    restart();
    };

//Create the on-click events for the crystal buttons
$('.crystal1').on("click", function() {
    yourTotal = yourTotal + crystal1 + crystal2 + crystal3 + crystal4;
    console.log("New yourTotal= " + yourTotal)
    $(".totalscore").html("Your Score: " + yourTotal);


    //conditional statement
    if (yourTotal == randTarget) {
        alert("You Win!");
        $("#scoretarget").html("Total Target: " + randTarget)
        winner();
    }
    else if (yourTotal > randTarget) {
        alert("You loser!");
        $("#scoretarget").html("Total Target: " + randTarget)
        loser();
    }
});
$('.crystal2').on('click', function() {
    yourTotal += crystal2;
    console.log("New yourTotal= " + yourTotal);
    $(".totalscore").html("Your Score: " + yourTotal);

    

    //conditional statements
    if (yourTotal == randTarget) {
        alert("You Win!");    
        $("#scoretarget").html("Total Target: " + randTarget)
    winner();
    }
    else if (yourTotal > randTarget) {
        alert("You loser!");
        $("#scoretarget").html("Total Target: " + randTarget)
    loser();
}
});

$('.crystal3').on('click', function() {
    yourTotal += crystal3;
    console.log("New yourTotal= " + yourTotal)
    $(".totalscore").html("Your Score: " + yourTotal);
 

//conditional statements
    if (yourTotal == randTarget) {
        alert("You Win!");
        $("#scoretarget").html("Total Target: " + randTarget)
    winner();
    }
    else if (yourTotal > randTarget) {
        alert("You loser!");
        $("#scoretarget").html("Total Target: " + randTarget)
    loser();
    }
});

$('.crystal4').on('click', function() {
    yourTotal += crystal4;
    console.log("New yourTotal= " + yourTotal)
    $(".totalscore").html("Your Score: " + yourTotal);


//conditional statements
    if (yourTotal == randTarget) {
        alert("You Win!");
        $("#scoretarget").html("Total Target: " + randTarget)
    winner();
    }
    else if (yourTotal > randTarget) {
        alert("You loser!")
        $("#scoretarget").html("Total Target: " + randTarget)
    loser();
}
});

});



   



