/* eslint-disable linebreak-style */
export function writeSlots(dom, slots, history, turn, chars, current) {
  let slot = current || 0;
  let document = dom;
  let isCurrentTurn = false;
  let value = '';
  let cssClass = '';
  if (history[turn]) {
    value = history[turn].word[slot] || '';
    cssClass = history[turn].rightSlots[slot] ? 'correct' : '';
    if (cssClass === '') cssClass = history[turn].rightChars[slot] ? 'wrongPlace' : '';
  } else if (turn === history.length) {
    isCurrentTurn = true;
    value = chars[slot] === '_' ? '' : chars[slot];
  }
  document.getElementById('turn' + turn).innerHTML += '<input type="text" maxlength="1" id="' + (isCurrentTurn ? 'slot' + slot : '') + '" class="'
  + cssClass + '" value="' + value + '" ' + (isCurrentTurn ? '' : 'disabled') + '>';
  slot += 1;
  if (slot < slots) document = writeSlots(document, slots, history, turn, chars, slot);
  else {
    document.getElementById('turn' + turn).innerHTML += isCurrentTurn ? '<input type="button" value="Jouer" id="submit" class="submit">' : '';
  }
  return document;
}

export function writeGrid(dom, slots, history, word, current, characters) {
  let turn = current || 0;
  let chars = characters || word.split('');
  let document = dom;
  if (history[turn]) {
    chars = chars.map((char, index) => {
      if (char !== '_') return char;
      if (history[turn].rightSlots[index]) return history[turn].word[index];
      return '_';
    });
  }
  if (!current) document.getElementById('grid').innerHTML = '';
  document.getElementById('grid').innerHTML += '<div id="turn' + turn + '"></div>';
  document = writeSlots(document, slots, history, turn, chars);
  turn += 1;
  if (turn < 6) document = writeGrid(document, slots, history, word, turn, chars);
  return document;
}

export function getSubmittedWord(dom, length, currentWord, currentCount) {
  let word = currentWord || '';
  let count = currentCount || 0;
  word += dom.getElementById('slot' + count).value;
  count += 1;
  if (count < length) word = getSubmittedWord(dom, length, word, count);
  return word;
}

export function writeWord(dom, word) {
  let modifiedWord = word.split('').map((char) => '<input type="text" class="result" value="' + char + '" disabled>').join('');
  let document = dom;
  document.getElementById('word').innerHTML = modifiedWord;
  return document;
}
