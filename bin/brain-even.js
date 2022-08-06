#!/usr/bin/env node
import BrainEvenLogic from '../src/games/brain-even-logic.js';
import { welcome, yourName, chekingAnswers } from '../src/index.js';

welcome();

const name = yourName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

chekingAnswers(name, BrainEvenLogic);
