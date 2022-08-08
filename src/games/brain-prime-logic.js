import readlineSync from 'readline-sync';
import { getRandNum } from '../index.js';

const BrainPrimeLogic = () => {
  const randNum = getRandNum(100);
  let correctAnswer = '';
  console.log(`Question: ${randNum}`);

  const answer = readlineSync.question('Your answer: ');

  for (let i = 2, max = Math.sqrt(randNum); i <= max; i += 1) {
    if (randNum % i === 0) {
      correctAnswer = 'no';
      break;
    } else {
      correctAnswer = 'yes';
    }
  }

  return [answer, correctAnswer];
};

export default BrainPrimeLogic;
