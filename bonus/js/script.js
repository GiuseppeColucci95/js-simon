//get DOM elements and save them in variables
const countdownEl = document.getElementById('countdown');
const ulEl = document.getElementById('numbers-list');
const formEl = document.getElementById('answers-form');
const inputEl = document.querySelectorAll('input');
const pEl = document.getElementById('message');
const buttonEl = document.querySelector('button');
const instructionsEl = document.getElementById('instructions');

//print the DOM elements in console
console.log(countdownEl, ulEl, formEl, pEl, buttonEl, inputEl);

//create useful variables
let countdownCounter = 3;
//generate random numbers
const numbersToRemember = randomNumber(5, 1, 50);
console.log(numbersToRemember);


//modify elements of the page
countdownEl.innerText = countdownCounter;
for (let i = 0; i < inputEl.length; i++) {

  //create li element and add inside ul element of the page
  const liElement = document.createElement('li');
  liElement.innerText = numbersToRemember[i];
  ulEl.appendChild(liElement);
}

//create interval countdown and stop it when is 0
const interval = setInterval(function () {

  countdownCounter--;
  countdownEl.innerText = countdownCounter;

  if (countdownCounter === 0) {
    console.log("counter is 0, so i stop myself");
    ulEl.classList.add('d-none');
    countdownEl.classList.add('d-none');
    formEl.classList.remove('d-none');
    instructionsEl.innerText = "Ora inserisci i numeri che ricordi!"
    clearInterval(interval);
  }

}, 1000);

//add event listener to the button
buttonEl.addEventListener('click', function (e) {
  e.preventDefault();

  let counter = 0;
  const numbersRemembered = [];
  const numbersGuessed = []

  //save input elements from the user in an array
  for (let i = 0; i < inputEl.length; i++) {
    const thisNumber = Number(inputEl[i].value);

    //check if input is empty
    if (inputEl[i].value === '') {
      pEl.innerText = "Compila tutti i campi!";
      return;
    } else if (isNaN(thisNumber)) {
      //check if user insert something not a number
      pEl.innerText = "Hai inserito qualcosa diverso da un numero, riprova!";
      return;
    } else if (numbersRemembered.includes(thisNumber)) {
      //check if user insert something duplicate
      pEl.innerText = "Hai inserito 2 o più numeri uguali, riprova inserendo numeri diversi!";
      return;
    } else {
      //insert the user number in the array
      numbersRemembered.push(thisNumber);
    }
  }

  //check how many elements the user has guessed
  for (let i = 0; i < numbersRemembered.length; i++) {
    const element = numbersRemembered[i];
    if (numbersToRemember.includes(element)) {
      counter++;
      numbersGuessed.push(element);
    }
  }

  pEl.innerText = `Hai indovinato ${counter} numeri su 5! Numeri generati: ${numbersToRemember}, Numeri indovinati: ${numbersGuessed}`;

})





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

