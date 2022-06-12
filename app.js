'use strict';

let user = prompt('What is your name?');
alert(`Hello, ${user}!  Welcome to my About Me page.`)

let correct = 0

let movie = prompt('My favorite movie is the Shawshank Redemption? y or n: ');
console.log(`movie: ${movie}`)
if (movie.toLowerCase() === 'y') {
    correct++;
    console.log(`correct: ${correct}`)
}

let physiology = prompt('Do I have a degree in Physiology? y or n: ');
console.log(`physiology: ${physiology}`)
if (physiology.toLowerCase() === 'n') {
    correct++;
    console.log(`correct: ${correct}`)
}

let toes = prompt('Do I have all ten toes? y or n: ')
console.log(`toes: ${toes}`)
if (toes.toLowerCase() === 'y') {
    correct++;
    console.log(`correct: ${correct}`)
}

let sudoku = prompt('Do I like to do Sudoku puzzles? y or n: ')
console.log(`sudoku: ${sudoku}`)
if (sudoku.toLowerCase() === 'y') {
    correct++;
    console.log(`correct: ${correct}`)
}

let spain = prompt('Was I born in Spain: ')
console.log(`sudoku: ${sudoku}`)
if (sudoku.toLowerCase() === 'n') {
    correct++;
    console.log(`correct: ${correct}`)
}

if (correct >= 3) {
    alert(`Good job, ${user}!  You got ${correct}/5 correct!`)
} else {
    alert(`Nice try, ${user}.  You got ${correct}/5 correct.`)
}

