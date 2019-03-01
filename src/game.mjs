/* eslint-disable linebreak-style */
export function selectWord(words, length) {
  let filteredWords = words.filter(word => word.length === length);
  let word = filteredWords[Math.floor(Math.random() * filteredWords.length)];
  return word;
}

export function determineChar(censoredWord) {
  let charIsCensored = censoredWord.split('').map(char => char === '-');
  let char;
  if (charIsCensored[0]) char = 0;
  else char = Math.floor(Math.random() * charIsCensored.length);
  if (!charIsCensored[char]) char = determineChar(censoredWord);
  return char;
}

export function uncensor(censoredWord, word, number, current) {
  let currentNb = current || 0;
  let char = determineChar(censoredWord);
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

export function hasWon(word, result) {
  return word === result;
}

export function isLastTurn(turn) {
  return turn === 6;
}
