// Import the flashCards.js constructor
var flashCards = require('./flashCards.js');

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

var chemSymbol = new flashCards.BasicCard('Fe is the chemical symbol for iron.', 'Fe');
console.log(chemSymbol.front);
console.log(chemSymbol.back);
console.log('-------------------------------------');


// Cloze-Deleted Flashcard Tests
firstPresident = new flashCards.ClozeCard('George Washington was the first president of the United States.', 'George Washington');
console.log(firstPresident.full);
console.log(firstPresident.cloze); 
console.log(firstPresident.partial); 
console.log('-------------------------------------');

nowPresident = new flashCards.ClozeCard('Donald Trump is the current president of the United States.', 'Donald Trump');
console.log(nowPresident.full);
console.log(nowPresident.cloze); 
console.log(nowPresident.partial); 
console.log('-------------------------------------');

oscarWinner = new flashCards.ClozeCard('Moonlight won the Oscar for best picture at the 2016 Academy Awards.', 'Moonlight');
console.log(oscarWinner.full);
console.log(oscarWinner.cloze); 
console.log(oscarWinner.partial); 
console.log('-------------------------------------');

var chemSymbol = new flashCards.ClozeCard('Fe is the chemical symbol for iron.', 'Fe');
console.log(chemSymbol.full);
console.log(chemSymbol.cloze); 
console.log(chemSymbol.partial); 
console.log('-------------------------------------');

var brokenCloze = new flashCards.ClozeCard("This doesn't work", "oops");
console.log(brokenCloze.full);
console.log(brokenCloze.cloze); 
console.log(brokenCloze.partial); 
console.log('-------------------------------------');