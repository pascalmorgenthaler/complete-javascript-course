'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
    // 1. Generate Random Dice Roll
    const randomDiceNumber = Math.trunc(Math.random() * 6) + 1;

    // 2. Display Dice
    console.log(randomDiceNumber);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${randomDiceNumber}.png`;
    
    // 3. Check for rolled 1: if true , switch to next player
    if ( randomDiceNumber !== 1) {
        // Add randomDiceNumber to current Score
        currentScore += randomDiceNumber
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        // Switch player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
});

