var wins = 0;
var losses = 0;
var score = 0;
var crystalCount = 0;

//write a function to encompass these 2 sections to refresh randomNumber and new values for crystals when you win or lose
var randomNumber = Math.floor(Math.random()*(120-19+1)+19);
console.log(randomNumber);

$("#blue").attr("data-number", Math.floor(Math.random() * 12) + 1);
$("#yellow").attr("data-number", Math.floor(Math.random() * 12) + 1);
$("#green").attr("data-number", Math.floor(Math.random() * 12) + 1);
$("#red").attr("data-number", Math.floor(Math.random() * 12) + 1);

$('#playerPoints').text(score);

$('#wins').text(wins);

$('losses').text(losses);

var numberGenerator = function() {
    crystalCount = randomNumber
    document.getElementById('randomNumber').innerHTML = crystalCount;
}


console.log(randomNumber);

function checkNumber(){

    if (crystalCount === randomNumber) {
        wins++;
        alert('You win!')
    }

    else if (crystalCount > randomNumber) {
        losses++;
        score = 0;
        alert('You lose.')
    }
}
$(".gem").click(function() {
    console.log($(this).data("number"));
    var clickedCrystal = $(this).data("number");

    crystalCount += clickedCrystal
    console.log(crystalCount)

    checkNumber()
    
function reset (){
    var score = 0;
    var crystalCount = 0;
}

  });
  
/*function addPoints1() {
    score = crystal1 + score;
    document.getElementById('playerPoints'.innerHTML) = score //change to jquery
    numberGenerator();
}

function addPoints1() {
    score = crystal2 + score;
    document.getElementById('playerPoints'.innerHTML) = score //change to jquery
    numberGenerator();
}

function addPoints1() {
    score = crystal3 + score;
    document.getElementById('playerPoints'.innerHTML) = score //change to jquery
    numberGenerator();
}

function addPoints1() { //change to jquery
    score = crystal4 + score;
    document.getElementById('playerPoints'.innerHTML) = score
    numberGenerator();
}*/