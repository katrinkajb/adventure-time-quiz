import challenges from '../quiz.data.js';
import { toastFunction } from '../utils.js';

const ul = document.getElementById('map-list');
    
const user = JSON.parse(localStorage.getItem('USER'));

// Check for completion
let completedAllChallenges = true;

for (let challenge of challenges) {
    if (!user.completed[challenge.id]) {
        completedAllChallenges = false;
    }
}
// If all quests completed, redirect to results
if (completedAllChallenges) {
    window.location = '../results/index.html';
}

for (let challenge of challenges) {
    const li = document.createElement('li');
    li.classList.add = 'map-link';
    
    const link = document.createElement('a');
    // link.classList.add = 'challenge-link';
    link.textContent = challenge.title;
    link.href = `../challenge/?id=${challenge.id}`;

    link.style.position = 'absolute';
    link.style.top = challenge.map.top;
    link.style.left = challenge.map.left;
    link.style.background = 'hsla(200, 61%, 56%, 1)';

    // If they have completed the challenge, disable link and give a message
    if (user.completed[challenge.id] === true) {
        // link.classList.add = 'completed-link';
        link.href = '#'; 
        link.onclick = toastFunction;
    }

    li.append(link);
    ul.append(li);
}