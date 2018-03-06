"use strict"


// function randLetter( ) {
//     let letters = ("abcdefghijklmnopqrstuvwxyz");
//     let psy = "";
//     let i = 0;
//     while (i < randLetter){
//         psy += letters.indexOf(Math.floor(Math.random() * letters.length));
//         i++;
//     }
//     return psy;
// }

// let randStr = "abcdefghijklmnopqrstuvwxyz";
// document.write("Computer Picks Random Letter", randStr.charAt(Math.random) + "<br>");


// let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
// 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// let letters = "abcdefghijklmnopqrstuvwxyz";
// let randomLetter  = letters.charCodeAt(Math.floor(Math.random() * 26));

// document.write("letter")  + randomLetter;







// supposedly checks if a value is inside of an array
// function inArray(arrayToCheck, value){
//     for(i = 0; i < arrayToCheck.length; i++){
//         if(arrayToCheck[i] === value){
//             return true;
//         }
//     }
//     return false;
// }

// let randArray = [1,2,3,4,5];

// document.write("In Array: ", inArray(randArray, 4));


let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

let selector = Math.floor(Math.random() * letters.length);
let randomLetter = letters[selector];
console.log(randomLetter);
let turns = 10;
let turnsLeft = turns.length - 1;




function guess() {
 if (guess == selector); {
     alert("Win")
    }
if (guess != selector);{
    alert("Lose")
}
}

//  (randomLetter.valueOf != selector); {
//      document.write("lose")
//  }
