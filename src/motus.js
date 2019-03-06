/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import {
  selectWord, censorWord, compare, hasWon, isLastTurn
} from './game.mjs';
import { writeGrid, getSubmittedWord, disableGrid } from './window.mjs';

const words = ['azertyu', 'flandre', 'tututut'];
let length = 7;
let given = 3;
let history = [];

let result = selectWord(words, length);
let censoredResult = censorWord(result, given);

writeGrid(document, length, history);

document.getElementById('word').innerHTML = censoredResult;

document.addEventListener('click', (e) => {
  if (e.target.id === 'submit') {
    let state = {};
    state.word = getSubmittedWord(document, history.length, length);
    state.rightSlots = compare(state.word, result);
    history.push(state);
    writeGrid(document, length, history);
    if (hasWon(state.word, result)) {
      document.getElementById('outcome').innerHTML = 'You win';
      if (history.length > 6) disableGrid(document, history.length, length);
    } else if (isLastTurn(history.length)) {
      document.getElementById('outcome').innerHTML = 'You lose';
    }
  }
});