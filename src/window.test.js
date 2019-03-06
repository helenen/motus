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
            + '<input type="text" maxlength="1" class="slot0" value="">'
            + '<input type="text" maxlength="1" class="slot1" value="">'
            + '<input type="text" maxlength="1" class="slot2" value="">'
            + '<input type="text" maxlength="1" class="slot3" value="">'
            + '<input type="text" maxlength="1" class="slot4" value="">'
            + '<input type="text" maxlength="1" class="slot5" value="">'
            + '<input type="text" maxlength="1" class="slot6" value="">'
            + '<input type="button" value="Jouer" id="submit" class="submit">'
          + '</div>'
          + '<div id="turn1">'
            + '<input type="text" maxlength="1" class="slot0" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot1" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot2" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot3" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot4" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot5" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot6" value="" disabled>'
            + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
          + '</div>'
          + '<div id="turn2">'
            + '<input type="text" maxlength="1" class="slot0" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot1" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot2" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot3" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot4" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot5" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot6" value="" disabled>'
            + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
          + '</div>'
          + '<div id="turn3">'
            + '<input type="text" maxlength="1" class="slot0" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot1" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot2" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot3" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot4" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot5" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot6" value="" disabled>'
            + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
          + '</div>'
          + '<div id="turn4">'
            + '<input type="text" maxlength="1" class="slot0" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot1" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot2" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot3" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot4" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot5" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot6" value="" disabled>'
            + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
          + '</div>'
          + '<div id="turn5">'
            + '<input type="text" maxlength="1" class="slot0" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot1" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot2" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot3" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot4" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot5" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot6" value="" disabled>'
            + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
          + '</div>'
        + '</div>');
    expect(window.writeGrid(dom, slots, history)).toEqual(expected);
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
            + '<input type="text" maxlength="1" class="slot0 correct" value="a" disabled>'
            + '<input type="text" maxlength="1" class="slot1" value="v" disabled>'
            + '<input type="text" maxlength="1" class="slot2 correct" value="e" disabled>'
            + '<input type="text" maxlength="1" class="slot3" value="v" disabled>'
            + '<input type="text" maxlength="1" class="slot4" value="v" disabled>'
            + '<input type="text" maxlength="1" class="slot5" value="v" disabled>'
            + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
          + '</div>'
          + '<div id="turn1">'
          + '<input type="text" maxlength="1" class="slot0 correct" value="a" disabled>'
          + '<input type="text" maxlength="1" class="slot1" value="v" disabled>'
          + '<input type="text" maxlength="1" class="slot2 correct" value="e" disabled>'
          + '<input type="text" maxlength="1" class="slot3" value="v" disabled>'
          + '<input type="text" maxlength="1" class="slot4 correct" value="t" disabled>'
          + '<input type="text" maxlength="1" class="slot5 correct" value="y" disabled>'
            + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
          + '</div>'
          + '<div id="turn2">'
            + '<input type="text" maxlength="1" class="slot0" value="">'
            + '<input type="text" maxlength="1" class="slot1" value="">'
            + '<input type="text" maxlength="1" class="slot2" value="">'
            + '<input type="text" maxlength="1" class="slot3" value="">'
            + '<input type="text" maxlength="1" class="slot4" value="">'
            + '<input type="text" maxlength="1" class="slot5" value="">'
            + '<input type="button" value="Jouer" id="submit" class="submit">'
          + '</div>'
          + '<div id="turn3">'
            + '<input type="text" maxlength="1" class="slot0" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot1" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot2" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot3" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot4" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot5" value="" disabled>'
            + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
          + '</div>'
          + '<div id="turn4">'
            + '<input type="text" maxlength="1" class="slot0" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot1" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot2" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot3" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot4" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot5" value="" disabled>'
            + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
          + '</div>'
          + '<div id="turn5">'
            + '<input type="text" maxlength="1" class="slot0" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot1" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot2" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot3" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot4" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot5" value="" disabled>'
            + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
          + '</div>'
        + '</div>');
    expect(window.writeGrid(dom, slots, history)).toEqual(expected);
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
            + '<input type="text" maxlength="1" class="slot0 correct" value="a" disabled>'
            + '<input type="text" maxlength="1" class="slot1 correct" value="z" disabled>'
            + '<input type="text" maxlength="1" class="slot2" value="d" disabled>'
            + '<input type="text" maxlength="1" class="slot3" value="f" disabled>'
            + '<input type="text" maxlength="1" class="slot4 wrongPlace" value="e" disabled>'
            + '<input type="text" maxlength="1" class="slot5" value="g" disabled>'
            + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
          + '</div>'
          + '<div id="turn1">'
            + '<input type="text" maxlength="1" class="slot0" value="">'
            + '<input type="text" maxlength="1" class="slot1" value="">'
            + '<input type="text" maxlength="1" class="slot2" value="">'
            + '<input type="text" maxlength="1" class="slot3" value="">'
            + '<input type="text" maxlength="1" class="slot4" value="">'
            + '<input type="text" maxlength="1" class="slot5" value="">'
            + '<input type="button" value="Jouer" id="submit" class="submit">'
          + '</div>'
          + '<div id="turn2">'
            + '<input type="text" maxlength="1" class="slot0" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot1" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot2" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot3" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot4" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot5" value="" disabled>'
            + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
          + '</div>'
          + '<div id="turn3">'
            + '<input type="text" maxlength="1" class="slot0" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot1" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot2" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot3" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot4" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot5" value="" disabled>'
            + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
          + '</div>'
          + '<div id="turn4">'
            + '<input type="text" maxlength="1" class="slot0" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot1" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot2" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot3" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot4" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot5" value="" disabled>'
            + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
          + '</div>'
          + '<div id="turn5">'
            + '<input type="text" maxlength="1" class="slot0" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot1" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot2" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot3" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot4" value="" disabled>'
            + '<input type="text" maxlength="1" class="slot5" value="" disabled>'
            + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
          + '</div>'
        + '</div>');
    expect(window.writeGrid(dom, slots, history)).toEqual(expected);
  });
});

describe('Slots writer', function () {
  test('should write the slots', () => {
    let dom = JSDOM.fragment('<div id="turn0"></div>');
    let slots = 7;
    let history = [];
    let turn = 0;
    let expected = JSDOM.fragment('<div id="turn0">'
      + '<input type="text" maxlength="1" class="slot0" value="">'
      + '<input type="text" maxlength="1" class="slot1" value="">'
      + '<input type="text" maxlength="1" class="slot2" value="">'
      + '<input type="text" maxlength="1" class="slot3" value="">'
      + '<input type="text" maxlength="1" class="slot4" value="">'
      + '<input type="text" maxlength="1" class="slot5" value="">'
      + '<input type="text" maxlength="1" class="slot6" value="">'
      + '<input type="button" value="Jouer" id="submit" class="submit">'
    + '</div>');
    expect(window.writeSlots(dom, slots, history, turn)).toEqual(expected);
  });
  test('should disable all inputs and buttons if the turn is not active', () => {
    let dom = JSDOM.fragment('<div id="turn1"></div>');
    let slots = 7;
    let history = [];
    let turn = 1;
    let expected = JSDOM.fragment('<div id="turn1">'
      + '<input type="text" maxlength="1" class="slot0" value="" disabled>'
      + '<input type="text" maxlength="1" class="slot1" value="" disabled>'
      + '<input type="text" maxlength="1" class="slot2" value="" disabled>'
      + '<input type="text" maxlength="1" class="slot3" value="" disabled>'
      + '<input type="text" maxlength="1" class="slot4" value="" disabled>'
      + '<input type="text" maxlength="1" class="slot5" value="" disabled>'
      + '<input type="text" maxlength="1" class="slot6" value="" disabled>'
      + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
    + '</div>');
    expect(window.writeSlots(dom, slots, history, turn)).toEqual(expected);
  });
});

describe('Word getter', function () {
  test('should return the submitted word', () => {
    let dom = JSDOM.fragment('<div id="grid">'
      + '<div id="turn0">'
        + '<input type="text" maxlength="1" class="slot0 correct" value="a" disabled>'
        + '<input type="text" maxlength="1" class="slot1" value="v" disabled>'
        + '<input type="text" maxlength="1" class="slot2 correct" value="e" disabled>'
        + '<input type="text" maxlength="1" class="slot3" value="v" disabled>'
        + '<input type="text" maxlength="1" class="slot4" value="v" disabled>'
        + '<input type="text" maxlength="1" class="slot5" value="v" disabled>'
        + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
      + '</div>'
      + '<div id="turn1">'
      + '<input type="text" maxlength="1" class="slot0 correct" value="a" disabled>'
      + '<input type="text" maxlength="1" class="slot1" value="v" disabled>'
      + '<input type="text" maxlength="1" class="slot2 correct" value="e" disabled>'
      + '<input type="text" maxlength="1" class="slot3" value="v" disabled>'
      + '<input type="text" maxlength="1" class="slot4 correct" value="t" disabled>'
      + '<input type="text" maxlength="1" class="slot5 correct" value="y" disabled>'
        + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
      + '</div>'
      + '<div id="turn2">'
        + '<input type="text" maxlength="1" class="slot0" value="a">'
        + '<input type="text" maxlength="1" class="slot1" value="z">'
        + '<input type="text" maxlength="1" class="slot2" value="e">'
        + '<input type="text" maxlength="1" class="slot3" value="r">'
        + '<input type="text" maxlength="1" class="slot4" value="t">'
        + '<input type="text" maxlength="1" class="slot5" value="y">'
        + '<input type="button" value="Jouer" id="submit" class="submit">'
      + '</div>'
      + '<div id="turn3">'
        + '<input type="text" maxlength="1" class="slot0" value="" disabled>'
        + '<input type="text" maxlength="1" class="slot1" value="" disabled>'
        + '<input type="text" maxlength="1" class="slot2" value="" disabled>'
        + '<input type="text" maxlength="1" class="slot3" value="" disabled>'
        + '<input type="text" maxlength="1" class="slot4" value="" disabled>'
        + '<input type="text" maxlength="1" class="slot5" value="" disabled>'
        + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
      + '</div>'
      + '<div id="turn4">'
        + '<input type="text" maxlength="1" class="slot0" value="" disabled>'
        + '<input type="text" maxlength="1" class="slot1" value="" disabled>'
        + '<input type="text" maxlength="1" class="slot2" value="" disabled>'
        + '<input type="text" maxlength="1" class="slot3" value="" disabled>'
        + '<input type="text" maxlength="1" class="slot4" value="" disabled>'
        + '<input type="text" maxlength="1" class="slot5" value="" disabled>'
        + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
      + '</div>'
      + '<div id="turn5">'
        + '<input type="text" maxlength="1" class="slot0" value="" disabled>'
        + '<input type="text" maxlength="1" class="slot1" value="" disabled>'
        + '<input type="text" maxlength="1" class="slot2" value="" disabled>'
        + '<input type="text" maxlength="1" class="slot3" value="" disabled>'
        + '<input type="text" maxlength="1" class="slot4" value="" disabled>'
        + '<input type="text" maxlength="1" class="slot5" value="" disabled>'
        + '<input type="button" value="Jouer" id="submit" class="submit" disabled>'
      + '</div>'
    + '</div>');
    let turn = 2;
    let length = 6;
    expect(window.getSubmittedWord(dom, turn, length)).toEqual('azerty');
  });
});

describe('word writer', function () {
  test('word write', () => {
    let dom = JSDOM.fragment('<div id="word"></div>');
    let word = 'a-h---g';
    let expected = JSDOM.fragment('<div id="word">'
    + '<input type="text" class="result" value="a" disabled>'
    + '<input type="text" class="result" value="-" disabled>'
    + '<input type="text" class="result" value="h" disabled>'
    + '<input type="text" class="result" value="-" disabled>'
    + '<input type="text" class="result" value="-" disabled>'
    + '<input type="text" class="result" value="-" disabled>'
    + '<input type="text" class="result" value="g" disabled>'
    + '</div>');
    expect(window.writeWord(dom, word)).toEqual(expected);
  });
});
