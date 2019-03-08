/* eslint-disable linebreak-style */
export function selectWord(math, words, length) {
  let filteredWords = words.filter(word => word.length === length);
  let word = filteredWords[math.floor(math.random() * filteredWords.length)];
  return word;
}

export function determineChar(math, censoredWord) {
  let charIsCensored = censoredWord.split('').map(char => char === '-');
  let char;
  if (charIsCensored[0]) char = 0;
  else char = math.floor(math.random() * charIsCensored.length);
  if (!charIsCensored[char]) char = determineChar(math, censoredWord);
  return char;
}

export function uncensor(censoredWord, word, number, current) {
  let currentNb = current || 0;
  let char = determineChar(Math, censoredWord);
  let newCensoredWord = censoredWord.substr(0, char) + word[char] + censoredWord.substr(char + 1, censoredWord.length);
  currentNb += 1;
  if (currentNb !== number) newCensoredWord = uncensor(newCensoredWord, word, number, currentNb);
  return newCensoredWord;
}

export function censorWord(word, uncensoredLetters) {
  let censoredWord = Array(word.length).fill('-').join('');
  if (uncensoredLetters > 0) censoredWord = uncensor(censoredWord, word, uncensoredLetters);
  return censoredWord;
}

export function compare(word, result) {
  return word.split('').map((char, index) => char === result[index]);
}

export function deepCompare(word, result) {
  let array = [];
  let comparisonArray = compare(word, result);
  let filteredWord = word.split('').map((char, index) => comparisonArray[index] ? '-' : char);
  let filteredResult = result.split('').map((char, index) => comparisonArray[index] ? '-' : char).join('');
  filteredWord.forEach((char) => {
    if (filteredResult.indexOf(char) > -1 && char !== '-') {
      array.push(true);
      filteredResult = filteredResult.substr(0, filteredResult.indexOf(char)) + filteredResult.substr(filteredResult.indexOf(char) + 1);
    } else {
      array.push(false);
    }
  });
  return array;
}

export function hasWon(word, result) {
  return word === result;
}

export function isLastTurn(turn) {
  return turn === 6;
}
