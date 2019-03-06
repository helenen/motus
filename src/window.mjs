/* eslint-disable linebreak-style */
export function writeSlots(dom, slots, history, turn, word, current, characters) {
  let slot = current || 0;
  let chars = characters || word.split('').map((char) => char !== '-' ? char : false);
  let document = dom;
  let disabled = turn === history.length ? '' : 'disabled';
  let value = '';
  let cssClass = '';
  if (history[turn]) {
    value = history[turn].word[slot] || '';
    cssClass = history[turn].rightSlots[slot] ? ' correct' : '';
    if (cssClass === '') cssClass = history[turn].rightChars[slot] ? ' wrongPlace' : '';
  }
  document.getElementById('turn' + turn).innerHTML += '<input type="text" maxlength="1" class="slot' + slot
  + cssClass + '" value="' + value + '" ' + disabled + '>';
  slot += 1;
  if (slot < slots) document = writeSlots(document, slots, history, turn, word, slot);
  else document.getElementById('turn' + turn).innerHTML += '<input type="button" value="Jouer" id="submit" class="submit" ' + disabled + '>';
  return document;
}

export function writeGrid(dom, slots, history, word, current) {
  let turn = current || 0;
  let document = dom;
  if (!current) document.getElementById('grid').innerHTML = '';
  document.getElementById('grid').innerHTML += '<div id="turn' + turn + '"></div>';
  document = writeSlots(document, slots, history, turn, word);
  turn += 1;
  if (turn < 6) document = writeGrid(document, slots, history, word, turn);
  return document;
}

export function getSubmittedWord(dom, turn, length, currentWord, currentCount) {
  let word = currentWord || '';
  let count = currentCount || 0;
  word += dom.querySelectorAll('input.slot' + count)[turn].value;
  count += 1;
  if (count < length) word = getSubmittedWord(dom, turn, length, word, count);
  return word;
}

export function writeWord(dom, word) {
  let modifiedWord = word.split('').map((char) => '<input type="text" class="result" value="' + char + '" disabled>').join('');
  let document = dom;
  document.getElementById('word').innerHTML = modifiedWord;
  return document;
}
