import { words } from './words.js';

const word = document.querySelector('.word');
const hint = document.querySelector('.hint');

function showWord() {
  let randomWord = words[Math.floor(Math.random()*words.length)];
  let currentWord = randomWord.word.split("");

  for(let i=0; i<currentWord.length; i++) {
    let j = Math.floor(Math.random() * (currentWord.length));
    [currentWord[i], currentWord[j]] = [currentWord[j], currentWord[i]];
  }
  word.innerText = currentWord.join("");
  hint.insertAdjacentHTML('beforeend',randomWord.hint);
}


showWord();