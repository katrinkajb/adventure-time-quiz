import { challenges } from '../quiz.data.js';

const ul = document.getElementById('map-list');
    
const user = JSON.parse(localStorage.getItem('USER'));

let completedAllChallenges = true;

for (let challenge of challenges) {
    if (!user.completed[challenge.id]) {
        completedAllChallenges = false;
    }
}

if (completedAllChallenges) {
    window.location = '../results/index.html';
}

for (let challenge of challenges) {

    const li = document.createElement('li');

    const a = document.createElement('a');
    a.textContent = challenge.title;
    a.href = `../quiz.data/?id=${challenge.id}`;
    
    li.append(a);
    ul.append(li);
}