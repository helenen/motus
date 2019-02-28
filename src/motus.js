/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import { selectWord, censorWord, compare } from './game.mjs';
import { writeGrid } from './window.mjs';

const words = ['azertyu', 'flandre', 'tututut'];
let length = 7;
let given = 3;
let history = [];

let result = selectWord(words, length);
let censoredResult = censorWord(result, given);

writeGrid(document, length, history);

document.getElementById('word').innerHTML = censoredResult;

function getSubmittedWord(currentWord, currentCount) {
  let word = currentWord || '';
  let count = currentCount || 0;
  word += document.getElementsByClassName('slot' + count)[history.length].value;
  count += 1;
  if (count < length) word = getSubmittedWord(word, count);
  return word;
}

document.addEventListener('click', (e) => {
  if (e.target.id === 'submit') {
    let state = {};
    state.word = getSubmittedWord();
    state.rightSlots = compare(state.word, result);
    history.push(state);
    writeGrid(document, length, history);
  }
});