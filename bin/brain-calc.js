#!/usr/bin/env node
import BrainCalcLogic from '../src/games/brain-calc-logic.js';
import { greetings, chekingAnswers } from '../src/index.js';

const name = greetings();
console.log('What is the result of the expression?');

chekingAnswers(name, BrainCalcLogic);
