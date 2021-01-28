import quizResults from './messages.js';
// import { getWinner } from './results.utils';

const params = new URLSearchParams(window.location.search);




const resultId = params.get('id');

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

const result = findById(quizResults, resultId);

const h1 = document.querySelector('h1');
h1.textContent = `Mathematical! You are ${result.title}!`;

const img = document.querySelector('img');
img.src = result.image;



// for (let result of quizResults.choices) {
//     const label = document.createElement('label');
//     const radio = document.createElement('input');
//     const span = document.createElement('span');

//     span.textContent = result.description;
    
//     radio.type = 'radio';
//     radio.value = result.id;
//     radio.name = 'choices';

//     label.append(span, radio);

//     form.append(label);    
// }