/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import {
  selectWord, censorWord, compare, deepCompare, hasWon, isLastTurn
} from './game.js';
import {
  writeGrid, getSubmittedWord, writeWord, determineFocus, getData
} from './window.js';

const levels = {
  veryEasy: {
    length: 7,
    given: 3,
    difficulty: 'VERY_EASY'
  },
  easy: {
    length: 7,
    given: 2,
    difficulty: 'EASY'
  },
  medium: {
    length: 7,
    given: 1,
    difficulty: 'MEDIUM'
  },
  motus: {
    length: 10,
    given: 2,
    difficulty: 'MOTUS'
  },
  superMotus: {
    length: 10,
    given: 1,
    difficulty: 'SUPER_MOTUS'
  }
};

let words = [];
getData(fetch, 'https://raw.githubusercontent.com/sindresorhus/pokemon/master/data/fr.json')
  .then(response => response.json())
  .then(function (response) {
    document.getElementById('levels').removeAttribute('hidden');
    words = response;
  })
  .catch(function (e) {
    document.getElementById('error').innerHTML = e;
  })
  .finally(function () {
    document.getElementById('spinner').setAttribute('hidden', true);
  });

let selectedLevel = {};
let history = [];
let score = 0;

let result;
let censoredResult;

let interval;

document.addEventListener('click', (e) => {
  if (e.target.id === 'submit') {
    let state = {};
    state.word = getSubmittedWord(document, selectedLevel.length);
    state.rightSlots = compare(state.word, result);
    state.rightChars = deepCompare(state.word, result);
    history.push(state);
    if (hasWon(state.word, result)) {
      score += 1;
      document.getElementById('score').innerHTML = 'Score : ' + score;
      result = selectWord(Math, words, selectedLevel.length);
      censoredResult = censorWord(result, selectedLevel.given);
      writeWord(document, censoredResult);
      history = [];
    } else if (isLastTurn(history.length)) {
      document.getElementById('outcome').innerHTML = 'Game Over.';
      clearInterval(interval);
      if (score > (localStorage.getItem(selectedLevel.difficulty) || 0)) {
        localStorage.setItem(selectedLevel.difficulty, score);
        document.getElementById('outcome').innerHTML += ' New record !';
      }
    }
    writeGrid(document, selectedLevel.length, history, censoredResult);
  } else if (e.target.id === 'level') {
    selectedLevel = levels[e.target.name];
    result = selectWord(Math, words, selectedLevel.length);
    censoredResult = censorWord(result, selectedLevel.given);

    writeWord(document, censoredResult);
    writeGrid(document, selectedLevel.length, history, censoredResult);

    interval = setInterval(() => {
      if (getSubmittedWord(document, selectedLevel.length).length === selectedLevel.length) {
        document.getElementById('submit').removeAttribute('disabled');
      } else {
        document.getElementById('submit').setAttribute('disabled', true);
      }
    }, 100);
    document.getElementById('score').innerHTML = 'Score : ' + score;
    document.getElementById('highScore').innerHTML = 'High Score : ' + (localStorage.getItem(selectedLevel.difficulty) != null
      ? localStorage.getItem(selectedLevel.difficulty) : 0);
    document.getElementById('levels').setAttribute('hidden', true);
    document.getElementById('reloadButton').removeAttribute('hidden');
  }
});

document.addEventListener('keyup', (e) => {
  if (e.target.id.indexOf('slot') >= 0) {
    document.getElementById(determineFocus(document, selectedLevel.length)).focus();
  }
});