#!/usr/bin/env node
import BrainPrimeLogic from '../src/games/brain-prime-logic.js';
import { greetings, chekingAnswers } from '../src/index.js';

const name = greetings();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

chekingAnswers(name, BrainPrimeLogic);
