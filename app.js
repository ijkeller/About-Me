'use strict';

let user2 = prompt('What is your name?');
console.log(`user2: ${user2}`)
alert(`Hello, ${user2}!  You wanted to take a quiz?  Ok...`)

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

// let user = prompt('What is your name?');
// console.log(`user: ${user}`)
// alert(`Hello, ${user}!  Welcome to my About Me page.`)

// let quest = prompt('What is your quest?');
// console.log(`quest: ${quest}`)

// let color = prompt('What is your favorite color?');
// console.log(`color: ${color}`)

// let colorTruethy = Boolean(color)
// console.log(`colorTruethy: ${colorTruethy}`)

// if (color.toLowerCase() === 'blue') {
//     alert('Right, off you go.')
// } else {
//     alert(`${color}? That is ${colorTruethy}...`)
// }

// let airspeed = prompt('What Is the Airspeed Velocity of an Unladen Swallow')

// let airspeedLower = airspeed.toLowerCase()
// console.log(`airspeedLower: ${airspeedLower}`)

// let science = "nine meters per second"
// let scienceNumber = "9 meters per second"
// let empirialScience = "20.1 miles per hour"

// let corumStudy2003 = "Although a definitive answer would of course require further measurements, published species-wide averages of wing length and body mass, initial Strouhal estimates based on those averages and cross-species comparisons, the Lund wind tunnel study of birds flying at a range of speeds, and revised Strouhal numbers based on that study all lead me to estimate that the average cruising airspeed velocity of an unladen European Swallow is roughly 11 meters per second, or 24 miles an hour. - Jonathan Corum 2003"

// let seri = "Assuming a spherical swallow in a vacuum… ah… forget it."

// let arthur = "What do you mean?  African or European Swallow?"

// if (airspeedLower === arthur.toLowerCase()) {
//     alert("I... I don't know that")
// } else if (airspeedLower === seri.toLowerCase()) {
//     alert('Thanks, Seri!')
// } else if ((airspeedLower === science) ||
//     (airspeedLower === scienceNumber) ||
//     (airspeedLower === empirialScience)) {
//     alert(corumStudy2003)
// } else {
//     'You need to rewatch Holy Grail'
// }

// ** Numbers Guessing Game **

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

//  ** Personal Quiz **


