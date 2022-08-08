#!/usr/bin/env node
import BrainProgressionLogic from '../src/games/brain-progression-logic.js';
import { greetings, chekingAnswers } from '../src/index.js';

const name = greetings();

chekingAnswers(name, BrainProgressionLogic);
