import challenges from '../quiz.data.js';

const params = new URLSearchParams(window.location.search);
const challengeId = params.get('id');

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

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
    //     - get data
    const selectionId = formData.get('choices');
    const choice = findById(challenge.choices, selectionId);
    const user = JSON.parse(localStorage.getItem('USER'));
// Update Stats
    user.lsp += choice.lsp,
    user.bmo += choice.bmo,
    user.treeTrunks += choice.treeTrunks,
    user.bubblegum += choice.bubblegum,
    user.marceline += choice.marceline,

    // use the selectionId to set the property dynamically
    user.completed[challenge.id] = true;

    //     - Put the new stats in local storage
    localStorage.setItem('USER', JSON.stringify(user));
    //     - Send user back to map
    window.location = '../map/index.html';
});