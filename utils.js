export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function toastFunction() {
    const toastMsg = document.getElementById('toast');
    toastMsg.className = 'show';
    toastMsg.textContent = `You've already visited that location`;
    setTimeout(function(){ toastMsg.className = toastMsg.className.replace('show', 'toast'); }, 2000);
}
