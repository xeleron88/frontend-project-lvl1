import readlineSync from 'readline-sync';
import { getRandNum } from '../index.js';

const BrainEvenLogic = () => {
  const answers = [];
  const randNum = getRandNum(100);
  let correctAnswer = '';
  console.log(`Question: ${randNum}`);

  const answer = readlineSync.question('Your answer: ');
  answers.push(answer);
  if (randNum % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [answer, correctAnswer];
};

export default BrainEvenLogic;
