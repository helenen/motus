const std = require('@std/esm')(module);
const game = std('./game.mjs');

describe('Word selector', function () {
  test('should return a word of a given length', () => {
    let words = ['azerty', 'qsdfghj', 'tyuiopkjhd'];
    expect(game.selectWord(words, 7)).toEqual('qsdfghj');
  });
  test('should return a word of any given length', () => {
    let words = ['azerty', 'qsdfghj', 'tyuiopkjhd'];
    expect(game.selectWord(words, 10)).toEqual('tyuiopkjhd');
  });
  test('should return a random word with the given length', () => {
    let words = ['azerty', 'qsdfghj', 'tyuiopkjhd', 'azertyuiop'];
    let selectWordTest = () => game.selectWord(words, 10);
    let results = [
      selectWordTest(),
      selectWordTest(),
      selectWordTest(),
      selectWordTest(),
      selectWordTest(),
      selectWordTest(),
      selectWordTest(),
      selectWordTest(),
      selectWordTest()
    ];
    expect(results.find(word => word === 'azertyuiop')).not.toEqual(undefined);
  });
});

describe('Word censor', function () {
  test('should return a censored version of a given word', () => {
    let word = 'azerty';
    expect(game.censorWord(word, 0)).toEqual('------');
  });
  test('should take the number of characters into account', () => {
    let word = 'azertyuiop';
    expect(game.censorWord(word, 0)).toEqual('----------');
  });
  test('should leave as many uncensored letters as needed', () => {
    let word = 'aze';
    expect(game.censorWord(word, 3)).toEqual('aze');
  });
});

describe('Uncensor', function () {
  test('should uncensor as many letters as needed', () => {
    let censoredWord = '---';
    let word = 'aze';
    expect(game.uncensor(censoredWord, word, 3)).toEqual('aze');
  });
  test('should uncensor random letters', () => {
    let censoredWord = '--------------------';
    let word = 'azertyuiopqsdfghjklm';
    expect(game.uncensor(censoredWord, word, 3)).not.toEqual('aze-----------------');
  });
});

describe('Character determiner', function () {
  test('should determine which character to pick', () => {
    let word = '-';
    expect(game.determineChar(word)).toEqual(0);
  });
  test('should not pick characters that are already uncensored', () => {
    let word = 'aze-ty';
    expect(game.determineChar(word)).toEqual(3);
  });
  test('should always pick the first character if possible', () => {
    let word = '------';
    expect(game.determineChar(word)).toEqual(0);
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
