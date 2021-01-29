import challenges from '../quiz.data.js';

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

    const a = document.createElement('a');
    a.classList.add = 'challenge-link';
    a.textContent = challenge.title;
    a.href = `../challenge/?id=${challenge.id}`;
    
// If they have completed the challenge, disable link and add strikethrough

    li.append(a);

    ul.append(li);
}