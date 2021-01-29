import challenges from '../quiz.data.js';
import { findById } from '../utils.js';

const params = new URLSearchParams(window.location.search);
const challengeId = params.get('id');

const challenge = findById(challenges, challengeId);

const h1 = document.querySelector('h1');
h1.textContent = challenge.title;

const img = document.getElementById('challenge-img');
img.src = `../assets/${challenge.image}`;

const p = document.getElementById('challenge-p');
p.textContent = challenge.description;

const form = document.querySelector('form');

for (let choice of challenge.choices) {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    const span = document.createElement('span');

    span.textContent = choice.description;
    
    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(span, radio);

    form.append(label);    
}

const button = document.createElement('button');
button.textContent = 'Submit';
form.appendChild(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const selectionId = formData.get('choices');
    const choice = findById(challenge.choices, selectionId);
//get data
    const user = JSON.parse(localStorage.getItem('USER'));

// Update Stats
    if (choice.lsp) user.lsp += choice.lsp;
    if (choice.bmo) user.bmo += choice.bmo;
    if (choice.treeTrunks) user.treeTrunks += choice.treeTrunks;
    if (choice.bubblegum) user.bubblegum += choice.bubblegum;
    if (choice.marceline) user.marceline += choice.marceline;

// use the selectionId to set the property dynamically
    user.completed[challenge.id] = true;

//Put the new stats in local storage
    localStorage.setItem('USER', JSON.stringify(user));
//Send user back to map
    window.location = '../map/index.html';
});