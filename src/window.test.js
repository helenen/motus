/* eslint-disable linebreak-style */
const std = require('@std/esm')(module);
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const window = std('./window.mjs');

describe('Grid writer', function () {
  test('should write the grid on the page', () => {
    let dom = JSDOM.fragment('<div id="grid"></div>');
    let slots = 7;
    let history = [];
    let expected = JSDOM.fragment('<div id="grid">'
          + '<div id="turn0">'
            + '<input type="text" maxlength="1" id="slot0" class="" value="t">'
            + '<input type="text" maxlength="1" id="slot1" class="" value="">'
            + '<input type="text" maxlength="1" id="slot2" class="" value="">'
            + '<input type="text" maxlength="1" id="slot3" class="" value="">'
            + '<input type="text" maxlength="1" id="slot4" class="" value="">'
            + '<input type="text" maxlength="1" id="slot5" class="" value="">'
            + '<input type="text" maxlength="1" id="slot6" class="" value="">'
            + '<input type="button" value="Jouer" id="submit" class="submit">'
          + '</div>'
          + '<div id="turn1">'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
          + '</div>'
          + '<div id="turn2">'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
          + '</div>'
          + '<div id="turn3">'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
          + '</div>'
          + '<div id="turn4">'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
          + '</div>'
          + '<div id="turn5">'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
          + '</div>'
        + '</div>');
    expect(window.writeGrid(dom, slots, history, 't______')).toEqual(expected);
  });
  test('should write down history correctly', () => {
    let dom = JSDOM.fragment('<div id="grid"></div>');
    let slots = 6;
    let history = [{
      word: 'avevvv',
      rightSlots: [true, false, true, false, false, false],
      rightChars: [false, false, false, false, false, false]
    },
    {
      word: 'avevty',
      rightSlots: [true, false, true, false, true, true],
      rightChars: [false, false, false, false, false, false]
    }];
    let expected = JSDOM.fragment('<div id="grid">'
          + '<div id="turn0">'
            + '<input type="text" maxlength="1" id="" class="correct" value="a" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="v" disabled>'
            + '<input type="text" maxlength="1" id="" class="correct" value="e" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="v" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="v" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="v" disabled>'
          + '</div>'
          + '<div id="turn1">'
          + '<input type="text" maxlength="1" id="" class="correct" value="a" disabled>'
          + '<input type="text" maxlength="1" id="" class="" value="v" disabled>'
          + '<input type="text" maxlength="1" id="" class="correct" value="e" disabled>'
          + '<input type="text" maxlength="1" id="" class="" value="v" disabled>'
          + '<input type="text" maxlength="1" id="" class="correct" value="t" disabled>'
          + '<input type="text" maxlength="1" id="" class="correct" value="y" disabled>'
          + '</div>'
          + '<div id="turn2">'
            + '<input type="text" maxlength="1" id="slot0" class="" value="a">'
            + '<input type="text" maxlength="1" id="slot1" class="" value="">'
            + '<input type="text" maxlength="1" id="slot2" class="" value="e">'
            + '<input type="text" maxlength="1" id="slot3" class="" value="">'
            + '<input type="text" maxlength="1" id="slot4" class="" value="t">'
            + '<input type="text" maxlength="1" id="slot5" class="" value="y">'
            + '<input type="button" value="Jouer" id="submit" class="submit">'
          + '</div>'
          + '<div id="turn3">'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
          + '</div>'
          + '<div id="turn4">'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
          + '</div>'
          + '<div id="turn5">'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
          + '</div>'
        + '</div>');
    expect(window.writeGrid(dom, slots, history, 'a_____')).toEqual(expected);
  });
  test('should indicate if a character is in the wrong place', () => {
    let dom = JSDOM.fragment('<div id="grid"></div>');
    let slots = 6;
    let history = [{
      word: 'azdfeg',
      rightSlots: [true, true, false, false, false, false],
      rightChars: [false, false, false, false, true, false]
    }];
    let expected = JSDOM.fragment('<div id="grid">'
          + '<div id="turn0">'
            + '<input type="text" maxlength="1" id="" class="correct" value="a" disabled>'
            + '<input type="text" maxlength="1" id="" class="correct" value="z" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="d" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="f" disabled>'
            + '<input type="text" maxlength="1" id="" class="wrongPlace" value="e" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="g" disabled>'
          + '</div>'
          + '<div id="turn1">'
            + '<input type="text" maxlength="1" id="slot0" class="" value="a">'
            + '<input type="text" maxlength="1" id="slot1" class="" value="z">'
            + '<input type="text" maxlength="1" id="slot2" class="" value="">'
            + '<input type="text" maxlength="1" id="slot3" class="" value="">'
            + '<input type="text" maxlength="1" id="slot4" class="" value="">'
            + '<input type="text" maxlength="1" id="slot5" class="" value="">'
            + '<input type="button" value="Jouer" id="submit" class="submit">'
          + '</div>'
          + '<div id="turn2">'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
          + '</div>'
          + '<div id="turn3">'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
          + '</div>'
          + '<div id="turn4">'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
          + '</div>'
          + '<div id="turn5">'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
            + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
          + '</div>'
        + '</div>');
    expect(window.writeGrid(dom, slots, history, 'a_____')).toEqual(expected);
  });
});

describe('Slots writer', function () {
  test('should write the slots', () => {
    let dom = JSDOM.fragment('<div id="turn0"></div>');
    let slots = 7;
    let history = [];
    let turn = 0;
    let expected = JSDOM.fragment('<div id="turn0">'
      + '<input type="text" maxlength="1" id="slot0" class="" value="t">'
      + '<input type="text" maxlength="1" id="slot1" class="" value="">'
      + '<input type="text" maxlength="1" id="slot2" class="" value="">'
      + '<input type="text" maxlength="1" id="slot3" class="" value="">'
      + '<input type="text" maxlength="1" id="slot4" class="" value="">'
      + '<input type="text" maxlength="1" id="slot5" class="" value="">'
      + '<input type="text" maxlength="1" id="slot6" class="" value="">'
      + '<input type="button" value="Jouer" id="submit" class="submit">'
    + '</div>');
    expect(window.writeSlots(dom, slots, history, turn, ['t', '_', '_', '_', '_', '_', '_'])).toEqual(expected);
  });
  test('should disable all inputs and buttons if the turn is not active', () => {
    let dom = JSDOM.fragment('<div id="turn1"></div>');
    let slots = 7;
    let history = [];
    let turn = 1;
    let expected = JSDOM.fragment('<div id="turn1">'
      + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
      + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
      + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
      + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
      + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
      + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
      + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
    + '</div>');
    expect(window.writeSlots(dom, slots, history, turn, ['t', '_', '_', '_', '_', '_', '_'])).toEqual(expected);
  });
});

describe('Word getter', function () {
  test('should return the submitted word', () => {
    let dom = JSDOM.fragment('<div id="grid">'
      + '<div id="turn0">'
        + '<input type="text" maxlength="1" id="" class="correct" value="a" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="v" disabled>'
        + '<input type="text" maxlength="1" id="" class="correct" value="e" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="v" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="v" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="v" disabled>'
      + '</div>'
      + '<div id="turn1">'
      + '<input type="text" maxlength="1" id="" class="correct" value="a" disabled>'
      + '<input type="text" maxlength="1" id="" class="" value="v" disabled>'
      + '<input type="text" maxlength="1" id="" class="correct" value="e" disabled>'
      + '<input type="text" maxlength="1" id="" class="" value="v" disabled>'
      + '<input type="text" maxlength="1" id="" class="correct" value="t" disabled>'
      + '<input type="text" maxlength="1" id="" class="correct" value="y" disabled>'
      + '</div>'
      + '<div id="turn2">'
        + '<input type="text" maxlength="1" id="slot0" class="" value="a">'
        + '<input type="text" maxlength="1" id="slot1" class="" value="z">'
        + '<input type="text" maxlength="1" id="slot2" class="" value="e">'
        + '<input type="text" maxlength="1" id="slot3" class="" value="r">'
        + '<input type="text" maxlength="1" id="slot4" class="" value="t">'
        + '<input type="text" maxlength="1" id="slot5" class="" value="y">'
        + '<input type="button" value="Jouer" id="submit" class="submit">'
      + '</div>'
      + '<div id="turn3">'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
      + '</div>'
      + '<div id="turn4">'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
      + '</div>'
      + '<div id="turn5">'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
        + '<input type="text" maxlength="1" id="" class="" value="" disabled>'
      + '</div>'
    + '</div>');
    let length = 6;
    expect(window.getSubmittedWord(dom, length)).toEqual('azerty');
  });
});

describe('Word writer', function () {
  test('word write', () => {
    let dom = JSDOM.fragment('<div id="word"></div>');
    let word = 'a_h___g';
    let expected = JSDOM.fragment('<div id="word">'
    + '<input type="text" class="result" value="a" disabled>'
    + '<input type="text" class="result" value="_" disabled>'
    + '<input type="text" class="result" value="h" disabled>'
    + '<input type="text" class="result" value="_" disabled>'
    + '<input type="text" class="result" value="_" disabled>'
    + '<input type="text" class="result" value="_" disabled>'
    + '<input type="text" class="result" value="g" disabled>'
    + '</div>');
    expect(window.writeWord(dom, word)).toEqual(expected);
  });
});
