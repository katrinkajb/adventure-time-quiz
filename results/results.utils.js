// write func (utils file) to determine winner - get user obj from local storage or feed as argument. set props as const (bmo, etc), put into array (make the names strings)
// (use i format). for loop to go through one by one to find the highest

export function getWinner(user) {
    const namesArray = [
        'lsp',
        'bmo',
        'treeTrunks',
        'bubblegum',
        'marceline'
    ];
    
    let winner = '';

    for (let name of namesArray) {
        const score = user[name];

        const winnerScore = user[winner];

        if (score >= winnerScore) {
            winner = score;
        }
    }
    return winner;
}
