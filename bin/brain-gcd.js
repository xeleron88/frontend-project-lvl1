#!/usr/bin/env node
import BrainGcdLogic from '../src/games/brain-gcd-logic.js';
import { greetings, chekingAnswers } from '../src/index.js';

const name = greetings();

chekingAnswers(name, BrainGcdLogic);
