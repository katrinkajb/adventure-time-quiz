// write func to determine winner - get user obj from local storage or feed as argument. set props as const (bmo, etc), put into array (make the names strings)

export function getWinner(user) {
    const namesArray = [
        'lsp',
        'bmo',
        'treeTrunks',
        'bubblegum',
        'marceline'
    ];
    
    let winner = '';
    
    // for loop to go through one by one to find the highest
    for (let name of namesArray) {
        const score = user[name];
        const winnerScore = user[winner] || 0;
        
        if (score > winnerScore) {
            winner = name;
        }
    }
    return winner;
}
