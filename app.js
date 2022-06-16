'use strict';

let user = prompt('What is your name?');
alert(`Hello, ${user}!  You wanted to take a quiz?  Ok...`)

let correct = 0;

function check(obj, answer) {
    if (obj.toLowerCase() === answer) {
        correct++;
    }
}

let movie = prompt('My favorite movie is the Shawshank Redemption? y or n: ');
check(movie, 'y')
alert(`You responded with ${movie}, ${correct} correct so far.  My favorite movies are Shawshank Redemption and Almost Famous.`)

let physiology = prompt('Do I have a degree in Physiology? y or n: ');
check(physiology, 'n')
alert(`You responded with ${physiology}, ${correct} correct so far.  I have a degree in Psychology not Physiology`)

let toes = prompt('Do I have all ten toes? y or n: ')
check(toes, 'y')
alert(`You responded with ${toes}, ${correct} correct so far.  Haven't lost any digits yet.  Knock on wood.`)

let sudoku = prompt('Do I like to do Sudoku puzzles? y or n: ')
check(sudoku, 'y')
alert(`You responded with ${sudoku}, ${correct} correct so far.  I love Sudoku; I play it every day.`)

let spain = prompt('Was I born in Spain? y or n: ')
check(spain, 'n')
alert(`You responded with ${spain}, ${correct} correct so far.  I was not born in Spain, I was born in Germany.`)

let guesses = 0;
const number = Math.floor(Math.random() * 10)
for (let i = 0; i <= 4; i++) {
    let guess = prompt("Guess a number between 1 and 10: ")
    guesses = i + 1;
    if (guess == number) {
        alert(`Correct! The number was ${number}`)
        correct++;
        break;
    } else if (guess > number) {
        alert(`${guess} is too high`)
    } else {
        alert(`${guess} is too low`)
    }
}

alert(`Good game. The number was ${number} and you guessed ${guesses} times.`);

for (let i = 0; i <= 6; i++) {
    let answers = ["1. University taught\n", "2. US Army Bootcamp\n", "3. Coding Bootcamp\n", "4. Highschool\n", "5. US Army Intelligence School\n", "6. Barnum and Baley Circus\n", "7. From the Mole People"]
    let multipleChoice = prompt(`Where did I learn to code? Type a number: \n \n \n${answers}`)
    if (multipleChoice == 3) {
        alert(`Good job, ${user}!  Coding Bootcamp is correct`);
        correct++;
        break;
    } else if (i === 5) {
        alert('You made 6 incorrect responses.  \n GAME OVER')
        break;
    } else {
        alert(`${multipleChoice} is not correct.  Guess again.`)
    }
}

if (correct >= 4) {
    alert(`Good job, ${user}!  You got ${correct} / 7 correct!`)
} else {
    alert(`Nice try, ${user}.  You got ${correct} /7 correct.`)
}
