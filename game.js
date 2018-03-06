"use strict"

// let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
// 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//The computer selects a random letter//

// let selector = Math.floor(Math.random() * letters.length);
// let randomLetter = letters[selector];
// console.log(randomLetter);
// let wins = 0;
// let losses = 0;
// let turnsLeft = 9;
// let guessesGuessed = [ ];
// let alphaSelected = null;


let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

let selector = Math.floor(Math.random() * letters.length);
let randomLetter = letters[selector];
console.log(randomLetter);
let turns = 10;
let turnsLeft = turns.length - 1;




function guess() {
 if (guess === selector); {
     document.write ("Win", "<br>")
    }
if (guess != selector);{
    document.write("Lose")
}
}

//The compuer asses the guess, and alters the number of turns left, or displays the word "winner" if correct//

// Non-working code
// document.onkeypress = function gamer(){
//     let alphaSelected = String.fromCharCode(event.keyCode);

// if (guessesGuessed[guessesGuessed.length] = alphaSelected);

// return document.getElementById("letter").innerHTML = turnsLeft - 1;
// }

//  _____________________________

// document.onkeypress = function gamer(){
//     let guess = Event.keypress; 
//     if (guess === randomLetter) {
//             let turnsLeft = turnsLeft - 1;
//             return document.getElementById("letter").innerHTML = "Win";
//             }
// }
//  _________________________________

// // This will display the word "win" no matter what



//use below
// function guess () { 
//  while (turnsLeft < 10);
//  if (guess === selector); {
//      document.write("Win");
//     }
// if (guess != selector);{
//     return document.getElementById("losses").innerHTML = "Lose";
// }
// }

