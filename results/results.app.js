import quizResults from './messages.js';
import { getWinner } from './results.utils.js';
import { findById } from '../utils.js';

// get user from local storage
const user = JSON.parse(localStorage.getItem('USER'));

// run getWinner and use that const to fill the page with info
const resultId = getWinner(user);

const result = findById(quizResults, resultId);
console.log(result);

const h1 = document.getElementById('results title');
h1.textContent = `Mathematical! You are ${result.title}!`;

const img = document.getElementById('results-img');
img.src = result.image;

const p = document.getElementById('results-p');
p.textContent = result.description;

const quote = document.getElementById('result-quote');
quote.textContent = result.quote;
