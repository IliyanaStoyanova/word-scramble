import { words } from './words.js';

const word = document.querySelector('.word');
const hint = document.querySelector('.hint span');
const time = document.querySelector('.time b');
const error = document.querySelector('.error p');
const newWord = document.querySelector('.new-word');
let timer;

const initTimer = (maxTimer, currentWord) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if(maxTimer>0) {
      time.innerText = maxTimer;
      return maxTimer--;
    }
    return error.innerText = `Time off! ${currentWord.toUpperCase()} was the correct word.`;
  }, 1000);
}

function showWord() {
  let randomWord = words[Math.floor(Math.random()*words.length)];
  let currentWord = randomWord.word.split("");

  initTimer(30, randomWord.word);

  for(let i=0; i<currentWord.length; i++) {
    let j = Math.floor(Math.random() * (currentWord.length));
    [currentWord[i], currentWord[j]] = [currentWord[j], currentWord[i]];
  }
  word.innerText = currentWord.join("");
  hint.innerText = randomWord.hint;
}

showWord();

newWord.addEventListener('click', showWord);