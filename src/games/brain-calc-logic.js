import readlineSync from 'readline-sync';
import { getRandNum } from '../index.js';

const BrainCalcLogic = () => {
  console.log('What is the result of the expression?');
  const signs = ['+', '-', '*'];
  const sign = signs[getRandNum(3)];
  const randNum1 = getRandNum(30);
  const randNum2 = getRandNum(20);
  console.log(`Question: ${randNum1} ${sign} ${randNum2}`);

  const answer = readlineSync.question('Your answer: ');
  let correctAnswer = '';
  switch (sign) {
    case '+':
      correctAnswer = randNum1 + randNum2;
      break;
    case '-':
      correctAnswer = randNum1 - randNum2;
      break;
    case '*':
      correctAnswer = randNum1 * randNum2;
      break;
    default:
      correctAnswer = null;
  }
  return [answer, correctAnswer];
};

export default BrainCalcLogic;
