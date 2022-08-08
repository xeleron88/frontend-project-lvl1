import readlineSync from 'readline-sync';
import { getRandNum } from '../index.js';

const BrainProgressionLogic = () => {
  let progressionStartNum = getRandNum(50);
  const progressionLength = getRandNum(15, 5);
  const progressionStep = getRandNum(10);
  const progressionArr = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progressionStartNum += progressionStep;
    progressionArr.push(progressionStartNum);
  }

  const numberReplace = getRandNum(progressionLength);
  const correctAnswer = progressionArr[numberReplace];

  progressionArr[numberReplace] = '..';

  console.log(`Question: ${progressionArr.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');

  return [answer, correctAnswer];
};

export default BrainProgressionLogic;
