/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import {
  selectWord, censorWord, compare, deepCompare, hasWon, isLastTurn
} from './game.mjs';
import { writeGrid, getSubmittedWord, writeWord } from './window.mjs';

const words = ['azertyu', 'flandre', 'tututut', 'azertyuiop', 'christophe'];
const levels = {
  veryEasy: {
    length: 7,
    given: 3
  },
  easy: {
    length: 7,
    given: 2
  },
  medium: {
    length: 7,
    given: 1
  },
  motus: {
    length: 10,
    given: 2
  },
  superMotus: {
    length: 10,
    given: 1
  }
};

let selectedLevel = {};
let history = [];
let score = 0;

let result;
let censoredResult;

document.addEventListener('click', (e) => {
  if (e.target.id === 'submit') {
    let state = {};
    state.word = getSubmittedWord(document, history.length, selectedLevel.length);
    state.rightSlots = compare(state.word, result);
    state.rightChars = deepCompare(state.word, result);
    history.push(state);
    writeGrid(document, selectedLevel.length, history);
    if (hasWon(state.word, result)) {
      score += 1;
      document.getElementById('score').innerHTML = 'Score : ' + score;
      result = selectWord(words, selectedLevel.length);
      censoredResult = censorWord(result, selectedLevel.given);
      writeWord(document, censoredResult);
      history = [];
      writeGrid(document, selectedLevel.length, history);
    } else if (isLastTurn(history.length)) {
      document.getElementById('outcome').innerHTML = 'You lose';
    }
  } else if (e.target.id === 'level') {
    selectedLevel = levels[e.target.name];
    result = selectWord(words, selectedLevel.length);
    censoredResult = censorWord(result, selectedLevel.given);

    writeWord(document, censoredResult);
    writeGrid(document, selectedLevel.length, history);

    document.getElementById('score').innerHTML = 'Score : ' + score;
    document.getElementById('levels').setAttribute('hidden', true);
    document.getElementById('reloadButton').removeAttribute('hidden');
  }
});
