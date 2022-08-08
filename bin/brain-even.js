#!/usr/bin/env node
import BrainEvenLogic from '../src/games/brain-even-logic.js';
import { greetings, chekingAnswers } from '../src/index.js';

const name = greetings();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

chekingAnswers(name, BrainEvenLogic);
