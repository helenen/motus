const std = require('@std/esm')(module);
const game = std('./game.mjs');

describe('Word selector', function () {
  test('should return a word of a given length', () => {
    let words = ['azerty', 'qsdfghj', 'tyuiopkjhd'];
    expect(game.selectWord(Math, words, 7)).toEqual('qsdfghj');
  });
  test('should return a word of any given length', () => {
    let words = ['azerty', 'qsdfghj', 'tyuiopkjhd'];
    expect(game.selectWord(Math, words, 10)).toEqual('tyuiopkjhd');
  });
  test('should return a random word with the given length', () => {
    let words = ['azerty', 'qsdfghj', 'tyuiopkjhd', 'azertyuiop'];
    let math = {
      random: () => 1,
      floor: (value) => value - 2
    };
    expect(game.selectWord(math, words, 10)).toEqual('tyuiopkjhd');
  });
});

describe('Word censor', function () {
  test('should return a censored version of a given word', () => {
    let word = 'azerty';
    expect(game.censorWord(word, 0)).toEqual('______');
  });
  test('should take the number of characters into account', () => {
    let word = 'azertyuiop';
    expect(game.censorWord(word, 0)).toEqual('__________');
  });
  test('should leave as many uncensored letters as needed', () => {
    let word = 'aze';
    expect(game.censorWord(word, 3)).toEqual('aze');
  });
});

describe('Uncensor', function () {
  test('should uncensor as many letters as needed', () => {
    let censoredWord = '___';
    let word = 'aze';
    expect(game.uncensor(censoredWord, word, 3)).toEqual('aze');
  });
  test('should uncensor random letters', () => {
    let censoredWord = '____________________';
    let word = 'azertyuiopqsdfghjklm';
    expect(game.uncensor(censoredWord, word, 3)).not.toEqual('aze_________________');
  });
});

describe('Character determiner', function () {
  test('should always pick the first character if it can', () => {
    let word = '______';
    expect(game.determineChar(Math, word)).toEqual(0);
  });
  test('should pick a random character otherwise', () => {
    let word = 'A_____';
    let math = {
      random: () => 1,
      floor: (value) => value - 1
    };
    expect(game.determineChar(math, word)).toEqual(5);
  });
});

describe('Comparer', function () {
  test('should return an array of false if no character is right', () => {
    let word = 'azerty';
    let result = 'qsdfgh';
    expect(game.compare(word, result)).toEqual([false, false, false, false, false, false]);
  });
  test('should return an array with the right characters', () => {
    let word = 'azerty';
    let result = 'qzdfgh';
    expect(game.compare(word, result)).toEqual([false, true, false, false, false, false]);
  });
  test('should return as many true as needed', () => {
    let word = 'azertytreza';
    let result = 'zzertytyeze';
    expect(game.compare(word, result)).toEqual([false, true, true, true, true, true, true, false, true, true, false]);
  });
});

describe('Referee', function () {
  test('should return true if the player won', () => {
    let word = 'azerty';
    let result = 'azerty';
    expect(game.hasWon(word, result)).toEqual(true);
  });
  test('should return false if the player did not win', () => {
    let word = 'azorty';
    let result = 'azerty';
    expect(game.hasWon(word, result)).toEqual(false);
  });
});

describe('Last turn checker', function () {
  test('should return false if it is not the last turn', () => {
    let turn = 3;
    expect(game.isLastTurn(turn)).toEqual(false);
  });
  test('should return true if it is the last turn', () => {
    let turn = 6;
    expect(game.isLastTurn(turn)).toEqual(true);
  });
});

describe('Deep Comparer', function () {
  test('should return an array of false if no character is right', () => {
    let word = 'azerty';
    let result = 'qsdfgh';
    expect(game.deepCompare(word, result)).toEqual([false, false, false, false, false, false]);
  });
  test('should return true if the character exists', () => {
    let word = 'azerty';
    let result = 'qsdegh';
    expect(game.deepCompare(word, result)).toEqual([false, false, true, false, false, false]);
  });
  test('should not detect the same character twice', () => {
    let word = 'qsdeef';
    let result = 'azerty';
    expect(game.deepCompare(word, result)).toEqual([false, false, false, true, false, false]);
  });
  test('should not detect correct characters', () => {
    let word = 'eaeaea';
    let result = 'zzzazz';
    expect(game.deepCompare(word, result)).toEqual([false, false, false, false, false, false]);
  });
  test('should detect characters even if one is correct', () => {
    let word = 'ezeezee';
    let result = 'aaaazza';
    expect(game.deepCompare(word, result)).toEqual([false, true, false, false, false, false, false]);
  });
  test('should work in any situation', () => {
    let word = 'ppppasdfhziopasd';
    let result = 'azertyuioppppasd';
    expect(game.deepCompare(word, result)).toEqual([true, true, true, false, true, false, false, false,
      false, true, true, true, false, false, false, false]);
  });
});
