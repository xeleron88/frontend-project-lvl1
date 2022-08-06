#!/usr/bin/env node
import BrainCalcLogic from '../src/games/brain-calc-logic.js';
import { greetings, chekingAnswers } from '../src/index.js';

const name = greetings();

chekingAnswers(name, BrainCalcLogic);
