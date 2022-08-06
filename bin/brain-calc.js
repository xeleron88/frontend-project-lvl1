#!/usr/bin/env node
import BrainCalcLogic from '../src/games/brain-calc-logic.js';
import { welcome, yourName, chekingAnswers } from '../src/index.js';

welcome();

const name = yourName();

console.log('What is the result of the expression?');

chekingAnswers(name, BrainCalcLogic);
