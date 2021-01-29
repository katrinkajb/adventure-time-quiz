// import quizResults from './messages.js';
import { getWinner } from './results.utils.js';

// get user from local storage
const user = JSON.parse(localStorage.getItem('USER'));

// run getWinner and use that const to fill the page with info
const result = getWinner(user);


console.log(result);

// for (let result of quizResults) {
    
//     const h1 = document.querySelector('h1');
//     h1.textContent = `Mathematical! You are ${result.title}!`;
    
//     const img = document.querySelector('img');
//     img.src = result.image;
    
//     const p = document.getElementById('results-p');
//     p.textContent = result.description;
    
//     const quote = document.getElementById('result-quote');
//     quote.textContent = result.quote;
// }