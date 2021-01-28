import quizResults from './messages.js';
import { getWinner } from './results.utils';

localStorage.getItem;

// get user from local storage
// run getWinner and use that id

const result = getWinner(user);


// const resultId = params.get('id');

// export function findById(array, id) {
//     for (let item of array) {
//         if (item.id === id) {
//             return item;
//         }
//     }
// }

// const displayResult = findById(quizResults, resultId);

const h1 = document.querySelector('h1');
h1.textContent = `Mathematical! You are ${result.title}!`;

const img = document.querySelector('img');
img.src = result.image;

const p = document.getElementById('results-p');
p.textContent = result.description;

const quote = document.querySelector('quote');
quote.textContent = result.quote;