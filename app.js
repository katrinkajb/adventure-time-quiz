const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const user = {
        name: formData.get('name'),
        descriptor: formData.get('descriptor'),
        completed: {},
    };
// Figure out alert later. 
    // if (!user.descriptor || !user.name) {
    //     alert('Unacceptable! Please fill out all fields');
    // } else {
    const userString = JSON.stringify(user);

    localStorage.setItem('USER', userString);

    window.location = './map/map.index.html';
    // }
});