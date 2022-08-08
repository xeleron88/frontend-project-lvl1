#!/usr/bin/env node
import BrainProgressionLogic from '../src/games/brain-progression-logic.js';
import { greetings, chekingAnswers } from '../src/index.js';

const name = greetings();
console.log('What number is missing in the progression?');

chekingAnswers(name, BrainProgressionLogic);
