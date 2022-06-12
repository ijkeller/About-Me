'use strict';

let user2 = prompt('What is your name?');
alert(`Hello, ${user2}!  You wanted to take a quiz?  Ok...`)

let correct = 0

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

if (correct >= 3) {
    alert(`Good job, ${user}!  You got ${correct}/5 correct!`)
} else {
    alert(`Nice try, ${user}.  You got ${correct}/5 correct.`)
}

// let i = 1
// const number = Math.floor(Math.random() * 10)
// console.log(number)
// for (i; i <= 4; i++) {
//     let guess = prompt("Guess a number between 1 and 10: ")
//     if (guess == number) {
//         alert(`Correct! The number was ${number}`)
//         console.log(number)
//         break;
//     } else if (guess > number) {
//         alert(`${guess} is too high`)
//         console.log(number)
//     } else {
//         alert(`${guess} is too low`)
//         console.log(number)
//     }
// }



