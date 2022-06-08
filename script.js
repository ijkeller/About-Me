'use strict';
console.log("JavaScript connected")


let user = prompt('What is your name?');
console.log(`user: ${user}`)
alert(`Hello, ${user}!  Welcome to my About Me page.`)

let quest = prompt('What is your quest?');
console.log(`quest: ${quest}`)

let color = prompt('What is your favorite color?');
console.log(`color: ${color}`)

let colorTruethy = Boolean(color)
console.log(`colorTruethy: ${colorTruethy}`)

if (color.toLowerCase() === 'blue') {
    alert('Right, off you go.')
} else {
    alert(`${color}? That is ${colorTruethy}...`)
}

let airspeed = prompt('What Is the Airspeed Velocity of an Unladen Swallow')

let airspeedLower = airspeed.toLowerCase()
console.log(`airspeedLower: ${airspeedLower}`)

let science = "nine meters per second"
let scienceNumber = "9 meters per second"
let empirialScience = "20.1 miles per hour"

let corumStudy2003 = "Although a definitive answer would of course require further measurements, published species-wide averages of wing length and body mass, initial Strouhal estimates based on those averages and cross-species comparisons, the Lund wind tunnel study of birds flying at a range of speeds, and revised Strouhal numbers based on that study all lead me to estimate that the average cruising airspeed velocity of an unladen European Swallow is roughly 11 meters per second, or 24 miles an hour. - Jonathan Corum 2003"

let seri = "Assuming a spherical swallow in a vacuum… ah… forget it."

let arthur = "What do you mean?  African or European Swallow?"

if (airspeedLower === arthur.toLowerCase()) {
    alert("I... I don't know that")
} else if (airspeedLower === seri.toLowerCase()) {
    alert('Thanks, Seri!')
} else if ((airspeedLower === science) ||
    (airspeedLower === scienceNumber) ||
    (airspeedLower === empirialScience)) {
    alert(corumStudy2003)
} else {
    'You need to rewatch Holy Grail'
}