//get DOM elements and save them in variables
const countdownEl = document.getElementById('countdown');
const ulEl = document.getElementById('numbers-list');
const formEl = document.getElementById('answers-form');
const inputEl = document.querySelectorAll('input');
const pEl = document.getElementById('message');
const buttonEl = document.querySelector('button');

//print the DOM elements in console
console.log(countdownEl, ulEl, formEl, pEl, buttonEl, inputEl);

//create useful variables
let countdownCounter = 3;
const numbersToRemember = [];

//modify elements of the page
countdownEl.innerText = countdownCounter;
for (let i = 0; i < inputEl.length; i++) {
  //generate random number
  const number = randomNumber(5, 1, 50);

  //create li element and add inside ul element of the page
  const liElement = document.createElement('li');
  liElement.innerText = number[i];
  ulEl.appendChild(liElement);
}

//create interval countdown and stop it when is 0
const interval = setInterval(function () {

  countdownCounter--;
  countdownEl.innerText = countdownCounter;

  if (countdownCounter === 0) {
    console.log("sono arrivato a 0");
    clearInterval(interval);
  }

}, 1000);





//FUNCTIONS

/**
 * Function that returns an array containing n different numbers between min and max included
 * @param {number} n 
 * @param {number} min 
 * @param {number} max
 * @returns {array} 
 */
function randomNumber(n, min, max) {
  const array = [];

  for (let i = 0; i < n; i++) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!array.includes(number)) {
      array.push(number);
    } else {
      i--;
    }
  }

  return array;
}

