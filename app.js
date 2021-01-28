const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const user = {
        name: formData.get('name'),
        descriptor: formData.get('descriptor'),
        completed: {},
    };
// Figure out alert later 
    // if (user.value) {
    const userString = JSON.stringify(user);

    localStorage.setItem('USER', userString);

    window.location = './map/index.html';
    // } else {
    //     alert('Unacceptable! Please fill out all fields');
    // }
});