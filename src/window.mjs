/* eslint-disable linebreak-style */
export function writeSlots(dom, slots, history, turn, current) {
  let slot = current || 0;
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
  if (slot < slots) document = writeSlots(document, slots, history, turn, slot);
  else document.getElementById('turn' + turn).innerHTML += '<input type="button" value="Jouer" id="submit" class="submit" ' + disabled + '>';
  return document;
}

export function writeGrid(dom, slots, history, current) {
  let turn = current || 0;
  let document = dom;
  if (!current) document.getElementById('grid').innerHTML = '';
  document.getElementById('grid').innerHTML += '<div id="turn' + turn + '"></div>';
  document = writeSlots(document, slots, history, turn);
  turn += 1;
  if (turn < 6) document = writeGrid(document, slots, history, turn);
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

export function disableGrid(dom, turn, length, currentCount) {
  let document = dom;
  let count = currentCount || 0;
  document.querySelectorAll('input.slot' + count)[turn].setAttribute('disabled', '');
  count += 1;
  if (count === length) document.querySelectorAll('input.submit')[turn].setAttribute('disabled', '');
  else document = disableGrid(document, turn, length, count);
  return document;
}
