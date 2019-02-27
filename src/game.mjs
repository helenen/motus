export function selectWord(words, length) {
  words = words.filter(word => word.length === length);
  let word = words[Math.floor(Math.random() * words.length)];
  return word;
}

export function censorWord(word, uncensoredLetters) {
  let censoredWord = Array(word.length).fill("-").join('');
  if(uncensoredLetters > 0) censoredWord = uncensor(censoredWord, word, uncensoredLetters);
  return censoredWord;
}

export function uncensor(censoredWord, word, number, current) {
  if(!current) current = 0;
  let char = determineChar(censoredWord);
  censoredWord = censoredWord.substr(0, char) + word[char] + censoredWord.substr(char + 1, censoredWord.length);
  current++;
  if(current != number) censoredWord = uncensor(censoredWord, word, number, current);
  return censoredWord;
}

export function determineChar(censoredWord) {
  let charIsCensored = censoredWord.split('').map(char => char === '-');
  let char = Math.floor(Math.random() * charIsCensored.length);
  if(!charIsCensored[char]) char = determineChar(censoredWord);
  return char;
}

export function compare(word, result) {
  let commonChars = word.split('').filter((char, index) => char === result[index]);
  return commonChars.length;
}