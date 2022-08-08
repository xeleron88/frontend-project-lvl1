#!/usr/bin/env node
import BrainGcdLogic from '../src/games/brain-gcd-logic.js';
import { greetings, chekingAnswers } from '../src/index.js';

const name = greetings();
console.log('What is the result of the expression?');

chekingAnswers(name, BrainGcdLogic);
