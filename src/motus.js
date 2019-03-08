/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import {
  selectWord, censorWord, compare, deepCompare, hasWon, isLastTurn
} from './game.mjs';
import { writeGrid, getSubmittedWord, writeWord } from './window.mjs';

async function getList() {
  let res = await fetch('https://raw.githubusercontent.com/sindresorhus/pokemon/master/data/fr.json')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: '
          + response.status);
      }
      return response.text().then((text) => text);
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });
  return await res;
}

const words = getList();
console.log(words);

// let xhr = new XMLHttpRequest();
// let url = 'data.json';
// xhr.open('GET', url, false);
// xhr.send();

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
    if (hasWon(state.word, result)) {
      score += 1;
      document.getElementById('score').innerHTML = 'Score : ' + score;
      result = selectWord(Math, words, selectedLevel.length);
      censoredResult = censorWord(result, selectedLevel.given);
      writeWord(document, censoredResult);
      history = [];
    } else if (isLastTurn(history.length)) {
      document.getElementById('outcome').innerHTML = 'Game Over.';
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

    document.getElementById('score').innerHTML = 'Score : ' + score;
    document.getElementById('highScore').innerHTML = 'High Score : ' + (localStorage.getItem(selectedLevel.difficulty) != null
      ? localStorage.getItem(selectedLevel.difficulty) : 0);
    document.getElementById('levels').setAttribute('hidden', true);
    document.getElementById('reloadButton').removeAttribute('hidden');
  }
});
