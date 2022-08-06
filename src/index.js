import readlineSync from 'readline-sync';

const getRandNum = (max, min = 1) => {
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  return randNum;
};

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const yourName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const chekingAnswers = (name, BrainEvenLogic) => {
  for (let i = 0; i < 3; i += 1) {
    const answers = BrainEvenLogic();
    if (String(answers[0]) === String(answers[1])) {
      console.log('Correct!');
    } else {
      console.log(`"${answers[0]}" is wrong answer ;(. Correct answer was "${answers[1]}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export {
  getRandNum,
  welcome,
  yourName,
  chekingAnswers,
};
