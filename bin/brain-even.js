#!/usr/bin/env node
import BrainEvenLogic from '../src/games/brain-even-logic.js';
import { greetings, chekingAnswers } from '../src/index.js';

const name = greetings();

chekingAnswers(name, BrainEvenLogic);
