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
let playing = true;


// Switch Player Function
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};


// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
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
        switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
    if (playing) {
    // 1. add current score to score of active player
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // 2. check if score is is >= 100
    if ( scores[activePlayer] >= 20 ) {
            // Finish the game
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
    } else {
            // Switch to the next player
            switchPlayer();
    }
  }
});