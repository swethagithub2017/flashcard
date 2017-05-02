// Require the 'inquirer' package
var inquirer = require('inquirer');

// Import the flash cards constructor implementations
var flashCards = require('./flashCards.js');
// Import the full list of questions
var questions = require('./questions.js').questions;

// Variable that holds the cloze-deleted questions list
var closeQuestions = [];

// Populate the cloze-deleted questions list
for (var i = 0; i < questions.length; i++) {
	var q = new flashCards.ClozeCard(questions[i].full, questions[i].cloze);
	closeQuestions.push(q);
}

// What question the user is currently on
var currentQuestion = 0;
// How many questions the user has gotten right
var correct = 0;
// How many questions the user has gotten wrong
var wrong = 0;


var start = function (){
inquirer.prompt([
  {
    type: "list",
    message: "What do you want to do?",
    choices: ["FlashCards", "Take Trivia Test"],
    name: "action"
  },
    

]).then(function(user) {
	if (user.action == "FlashCards") {
		// Begin asking the review!
		review();
		start();
	}else{
		// Begin asking the questions!
		askQuestion();
	}
});
}

function review(){
// Basic Flashcard Tests
var firstPresident = new flashCards.BasicCard('Who was the first president of the United States?', 'George Washington');
console.log(firstPresident.front);
console.log(firstPresident.back); 
console.log('-------------------------------------');

var nowPresident = new flashCards.BasicCard('Who is the current president of the United States?', 'Donald Trump');
console.log(nowPresident.front);
console.log(nowPresident.back);
console.log('-------------------------------------');

var oscarWinner = new flashCards.BasicCard('What movie won the Oscar for best picture at the 2016 Academy Awards?', 'Moonlight');
console.log(oscarWinner.front);
console.log(oscarWinner.back);
console.log('-------------------------------------');

var chemSymbol = new flashCards.BasicCard('What is the chemical symbol for iron.', 'Fe');
console.log(chemSymbol.front);
console.log(chemSymbol.back);
console.log('-------------------------------------');
}



// askQuestion prompts the user to answer a given cloze-deleted question
function askQuestion() {
	inquirer.prompt([
		{
			type: 'input',
			message: closeQuestions[currentQuestion].partial + '\nAnswer: ',
			name: 'userGuess'
		}
	]).then(function (answers) {
		console.log('\n');

		// Checking answers
		if (answers.userGuess.toLowerCase() === closeQuestions[currentQuestion].cloze.toLowerCase()) {
			console.log('Correct!');
			correct++;
		} else {
			console.log('Incorrect!');
			wrong++;
		}

		// Display correct answer
		console.log(closeQuestions[currentQuestion].full);
		console.log('-------------------------------------\n');

		// Go to the next question
		if (currentQuestion < closeQuestions.length - 1) {
			currentQuestion++;
			askQuestion();
		} else {
			console.log('Game Over!');
			console.log('Correct Answers: ' + correct);
			console.log('Incorrect Answers: ' + wrong);

			console.log('-------------------------------------\n');

			// Prompt play again
			inquirer.prompt([
				{
					type: 'confirm',
					message: 'Would you like to play again?',
					name: 'playAgain'
				}
			]).then(function (answers) {
				if (answers.playAgain) {
					// Reset 
					currentQuestion = 0;
					correct = 0;
					wrong = 0;

					// Start
					askQuestion();
				} else {
					// Exit 
					console.log('Thanks for playing! Goodbye!');
				}
			})
		}
	})
}

start();