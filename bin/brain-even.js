#!/usr/bin/env node
import readlineSync from 'readline-sync';

// WELCOME MESSAGE
console.log('Welcome to the Brain Games!');

// YOUR NAME
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);

// brain-even game
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let answer = '';
for (let i = 0; i < 3; i += 1) {
  const randNum = Math.floor(Math.random() * (100 - 1)) + 1;
  console.log(`Question: ${randNum}`);
  answer = readlineSync.question('Your answer: ');
  if (randNum % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  } else if (answer === 'no') {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
    console.log(`Let's try again, ${name}!`);
    break;
  }

  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
