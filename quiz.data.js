
const colorQ = {
    id: 'ice-kingdom',
    title: 'Ice Kingdom',
    // Update this
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../assets/ice-kingdom.png',
    description: `
        Filler desc about needing scarves in the Ice Kingdom. Which color scarf do you choose?
    `,
    choices: [{
        id: 'purple',
        description: 'Purple!',
        lsp: 1,
    }, {
        id: 'green',
        description: 'Green!',
        bmo: 1,
    }, {
        id: 'yellow',
        description: 'Yellow!',
        treeTrunks: 1,
    }, {
        id: 'pink',
        description: 'Pink!',
        bubblegum: 1,
    }, {
        id: 'red',
        description: 'Red!',
        marceline: 1,
    }]
};

const personalityQ = {
    id: 'treehouse',
    title: "Finn and Jake's Treehouse",
    // Update this
    map: {
        top: '30%',
        left: '44%'
    },
    image: '../assets/treehouse.jpg',
    description: `
        Filler desc about something to do with your personality. Which best describes you?
    `,
    choices: [{
        id: 'gentle',
        description: 'Gentle',
        treeTrunks: 1,
    }, {
        id: 'smart',
        description: 'Smart',
        bubblegum: 1,
    }, {
        id: 'fun',
        description: 'Fun',
        marceline: 1,
    }, {
        id: 'sassy',
        description: 'Sassy',
        lsp: 1,
    }, {
        id: 'loyal',
        description: 'Loyal',
        bmo: 1,
    }]
};

// const likesQ = {
//     id: 'likes',
//     title: 'Fire Kingdom',
//     // Update this
//     map: {
//         top: '89%',
//         left: '44%'
//     },
//     image: '../assets/fire-kingdom.png',
//     description: `
//         
//     `,
//     choices: [{
//         id: '',
//         description: '',
//         lsp: 1,
//     }, {
//         id: '',
//         description: '',
//         bmo: 1,
//     }, {
//         id: '',
//         description: '',
//         treeTrunks: 1,
//     }, {
//         id: '',
//         description: '',
//         bubblegum: 1,
//     }, {
//         id: '',
//         description: '',
//         marceline: 1,
//     }]
// };

// const hobbyQ = {
//     id: 'hobby',
//     title: 'Lumpy Space',
//     // Update this
//     map: {
//         top: '89%',
//         left: '44%'
//     },
//     image: '../assets/lumpy-space.jpg',
//     description: `
//         
//     `,
//     choices: [{
//         id: '',
//         description: '',
//         lsp: 1,
//     }, {
//         id: '',
//         description: '',
//         bmo: 1,
//     }, {
//         id: '',
//         description: '',
//         treeTrunks: 1,
//     }, {
//         id: '',
//         description: '',
//         bubblegum: 1,
//     }, {
//         id: '',
//         description: '',
//         marceline: 1,
//     }]
// };


const dislikesQ = {
    id: 'castleLemongrab',
    title: 'Castle Lemongrab',
    // Update this
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../assets/castle-lemongrab.png',
    description: `
        Lemongrab approaches you and demands to know what you hate. What do you find the most Unacceptable?
    `,
    choices: [{
        id: 'sunlight',
        description: 'Too much sunlight!',
        marceline: 1,
    }, {
        id: 'thieves',
        description: 'Nasty thieves stealing all of my stuff!',
        treeTrunks: 1,
    }, {
        id: 'hurting',
        description: 'People hurting my friends!',
        bubblegum: 1,
    }, {
        id: 'liquids',
        description: 'Too much liquid!',
        bmo: 1,
    }, {
        id: 'parents',
        description: 'Being told what to do by my parents!',
        lsp: 1,
    }]
};

// const idealDayQ = {
//     id: 'idealDay',
//     title: 'Candy Kingdom',
//     // Update this
//     map: {
//         top: '89%',
//         left: '44%'
//     },
//     image: '../assets/candy-kingdom.png',
//     description: `
//         
//     `,
//     choices: [{
//         id: '',
//         description: '',
//         lsp: 1,
//     }, {
//         id: '',
//         description: '',
//         bmo: 1,
//     }, {
//         id: '',
//         description: '',
//         treeTrunks: 1,
//     }, {
//         id: '',
//         description: '',
//         bubblegum: 1,
//     }, {
//         id: '',
//         description: '',
//         marceline: 1,
//     }]
// };

const challenges = [
    colorQ, 
    personalityQ,
    // likesQ
    // hobbyQ
    dislikesQ
    // idealDayQ
];

export default challenges;