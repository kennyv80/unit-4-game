var wins = 0;
var losses = 0;
var score = 0;
var NumberToGuess = 0;

var randomNumberToGuess = Math.floor(Math.random() * 80) + 20;

var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;

document.getElementById('playerPoints').innerHTML = score;

document.getElementById('wins').innerHTML = wins;

document.getElementById('losses').innerHTML = losses;

var numberGenerator = function() {
    numberToGuess = randomNumberToGuess
    document.getElementById('randomNumber').innerHTML = numberToGuess;
}

console.log(randomNumberToGuess);
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);

if (numberToGuess === score) {
    wins++;
    alert('You win!')
}

else if (numberToGuess <= score) {
    losses++;
    score = 0;
    alert('You lose.')
}
};

function addPoints1() {
    
}