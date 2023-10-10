import { words } from './words.js';

const word = document.querySelector('.word');
const hint = document.querySelector('.hint span');
const time = document.querySelector('.time b');
const info = document.querySelector('.info p');
const newWord = document.querySelector('.new-word');
const checkWord = document.querySelector('.check-word');
const userWord = document.querySelector('.user-word');
let timer, randomWord;

const addClass = (el, clName) => {
  el.classList.add(clName);
}

const removeClass = (el, clName) => {
  el.classList.remove(clName);
}

const clearClass = () => {
  removeClass(info, 'hide');
  removeClass(info, 'success');
  removeClass(info, 'error');
}

const initTimer = (maxTimer, currentWord) => {
  clearInterval(timer);
  clearClass();
  timer = setInterval(() => {
    if(maxTimer>0) {
      maxTimer--;
      return time.innerText = maxTimer;
    }
    addClass(info, 'error');
    return info.innerText = `Time off! ${currentWord.toUpperCase()} was the correct word.`;
  }, 1000);
}

function showWord() {
  randomWord = words[Math.floor(Math.random()*words.length)];
  let currentWord = randomWord.word.split("");

  initTimer(30, randomWord.word);

  for(let i=0; i<currentWord.length; i++) {
    let j = Math.floor(Math.random() * (currentWord.length));
    [currentWord[i], currentWord[j]] = [currentWord[j], currentWord[i]];
  }  
  clearClass();
  addClass(info, 'hide');
  word.innerText = currentWord.join("");
  hint.innerText = randomWord.hint;
  userWord.value = '';
}

function isWord() {
  clearClass();
  if(!userWord) {
    addClass(info, 'error');
    return info.innerText = "Please enter the word to check!";
  }

  let inputWord = userWord.value.toLowerCase();
  
  if(inputWord !== randomWord.word) {    
    addClass(info, 'error');
    return info.innerText = `Oops! "${inputWord}" is not a correct word`;
  }
  addClass(info, 'success');  
  clearInterval(timer);
  return info.innerText = `Congrats! "${inputWord}" is the correct word`;
}

showWord();
newWord.addEventListener('click', showWord);
checkWord.addEventListener('click', isWord);