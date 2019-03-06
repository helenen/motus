/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import {
  selectWord, censorWord, compare, deepCompare, hasWon, isLastTurn
} from './game.mjs';
import { writeGrid, getSubmittedWord } from './window.mjs';

const words = ['azertyu', 'flandre', 'tututut'];
let length = 7;
let given = 3;
let history = [];
let score = 0;

let result = selectWord(words, length);
let censoredResult = censorWord(result, given);

writeGrid(document, length, history);

document.getElementById('word').innerHTML = censoredResult;
document.getElementById('score').innerHTML = 'Score : ' + score;

document.addEventListener('click', (e) => {
  if (e.target.id === 'submit') {
    let state = {};
    state.word = getSubmittedWord(document, history.length, length);
    state.rightSlots = compare(state.word, result);
    state.rightChars = deepCompare(state.word, result);
    history.push(state);
    writeGrid(document, length, history);
    if (hasWon(state.word, result)) {
      score += 1;
      document.getElementById('score').innerHTML = 'Score : ' + score;
      result = selectWord(words, length);
      censoredResult = censorWord(result, given);
      document.getElementById('word').innerHTML = censoredResult;
      history = [];
      writeGrid(document, length, history);
    } else if (isLastTurn(history.length)) {
      document.getElementById('outcome').innerHTML = 'You lose';
    }
  }
});