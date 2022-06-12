
let user = prompt('What is your name?');
alert(`Hello, ${user}!  You wanted to take a quiz?  Ok...`)

let correct = 1;

let movie = prompt('My favorite movie is the Shawshank Redemption? y or n: ');
if (movie.toLowerCase() === 'y') {
    correct++;
}

let physiology = prompt('Do I have a degree in Physiology? y or n: ');
if (physiology.toLowerCase() === 'n') {
    correct++;
}

let toes = prompt('Do I have all ten toes? y or n: ')
if (toes.toLowerCase() === 'y') {
    correct++;
}

let sudoku = prompt('Do I like to do Sudoku puzzles? y or n: ')
if (sudoku.toLowerCase() === 'y') {
    correct++;
}

let spain = prompt('Was I born in Spain: ')
if (sudoku.toLowerCase() === 'n') {
    correct++;
}

let guesses = 0;
const number = Math.floor(Math.random() * 10)
for (i = 0; i <= 4; i++) {
    let guess = prompt("Guess a number between 1 and 10: ")
    guesses = i;
    if (guess == number) {
        alert(`Correct! The number was ${number}`)
        break;
    } else if (guess > number) {
        alert(`${guess} is too high`)
    } else {
        alert(`${guess} is too low`)
    }
}

alert(`Good game. The number was ${number} and you guessed ${guesses} times.`);
'use strict';

if (correct >= 3) {
    alert(`Good job, ${user}!  You got ${correct}/5 correct!`)
} else {
    alert(`Nice try, ${user}.  You got ${correct}/5 correct.`)
}



