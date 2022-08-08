import readlineSync from 'readline-sync';
import { getRandNum } from '../index.js';

const BrainGcdLogic = () => {
  console.log('What is the result of the expression?');
  const randNum1 = getRandNum(100);
  const randNum2 = getRandNum(100);
  console.log(`Question: ${randNum1} ${randNum2}`);

  const answer = readlineSync.question('Your answer: ');

  const gcdRec = (x, y) => {
    if (y > x) return gcdRec(y, x);
    if (!y) return x;
    return gcdRec(y, x % y);
  };

  const correctAnswer = gcdRec(randNum1, randNum2);
  return [answer, correctAnswer];
};

export default BrainGcdLogic;
