// Your goal is to create a command line game, where users
// guess a randomly generated number between 1-100 until 
// they have guessed correctly. 

// You'll need to npm install prompt
var prompt = require('prompt');

// example of using prompt

var globalGuess = undefined;
var randomNumber = Math.floor((Math.random() * 100) + 1);
console.log("randomNum is " + randomNumber);

// Create a game, where users can guess until they guess correctly.

function guessingGame(){
	prompt.get(['guess'], function (err, result) {
		console.log(result);
		console.log(result.guess);
		globalGuess = result.guess;
		if(randomNumber !== parseInt(globalGuess)){
			console.log("You have to try again");
			guessingGame();
		}
		else {
			console.log("Well done");
		}
	});
}

guessingGame();
