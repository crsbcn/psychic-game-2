
//Define what letters the computer can use as a guess
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
	"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Set initial global variables///////////////////////////////////////////////////////////
var wins = 0
var losses = 0
var guessesRemaining = 10
//"Guesses so far" is an array that will record the User's guesses in each round.
var guessesSoFar = [];
//This will be the function that will run after a user selects a key.////////////////////
var userGuess = null;
//Have CPU Player pick a letter "out of a hat" to be guessed by User/////////////////////
var letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("Wins: " + wins + " Losses: " + losses + " Guesses Remaining: " + guessesRemaining
	+ " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
// Listening for User Input



document.onkeyup = function (event) {

	// When user presses a key, it records it and saves to userGuess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (letterToBeGuessed == userGuess) {
		wins++;
		alert("You won!");
		guessesRemaining = 10;
		guessesSoFar = [];
		letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " Guesses Remaining: " +
			guessesRemaining + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

		document.getElementById("wins").textContent = wins;
		
		document.getElementById("guessesRemaining").textContent = guessesRemaining;

		document.getElementById("guessesSoFar").textContent = guessesSoFar;
	}

	else if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
		// guessesSoFar(guessesSoFar.length)=userGuess;
		// if it is a new letter then decrease remaining guesses by 1
		guessesRemaining--;

		guessesSoFar.push(userGuess);
		if (guessesRemaining === 0) {
			losses++;
			alert("You lost!");
			guessesRemaining = 10;
			guessesSoFar = [];
			letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
			console.log("Wins: " + wins + " Losses: " + losses + " Guesses Remaining: " + guessesRemaining +
				" Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

			document.getElementById("losses").textContent = losses;
		}

		document.getElementById("guessesRemaining").textContent = guessesRemaining;

		document.getElementById("guessesSoFar").textContent = guessesSoFar;
	}
}

