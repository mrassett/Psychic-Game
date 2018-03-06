"use strict"

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

let selector = Math.floor(Math.random() * letters.length);
let randomLetter = letters[selector];
console.log(randomLetter);
let turns = 10;
let turnsLeft = turns.length - 1;
let wins = 0;
let losses = 0;
let guessesGuessed = [ ];
let alphaSelected = null;

function guess() {
 if (guess === selector); {
     document.write ("Win", "<br>","<br>")
    }
if (guess != selector);{
    document.write("Lose")
}
}

 