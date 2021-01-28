
const colorQ = {
    id: 'ice-kingdom',
    title: 'Ice Kingdom',
    // Update this
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../assets/ice-kingdom.png',
    description: `Filler desc about needing scarves in the Ice Kingdom. Which color scarf do you choose?`,
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
    description: `Finn and Jake are having a compliment party! You join in the fun and have a blast. Which compliment do you receive the most?`,
    choices: [{
        id: 'gentle',
        description: 'You are kind and gentle.',
        treeTrunks: 1,
    }, {
        id: 'smart',
        description: 'You are really smart.',
        bubblegum: 1,
    }, {
        id: 'fun',
        description: 'You are fun to be around.',
        marceline: 1,
    }, {
        id: 'sassy',
        description: 'You are super sassy.',
        lsp: 1,
    }, {
        id: 'loyal',
        description: 'You are loyal to your friends until the end.',
        bmo: 1,
    }]
};

const likesQ = {
    id: 'likes',
    title: 'Fire Kingdom',
    // Update this
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../assets/fire-kingdom.png',
    description: `
        You enter the fire kingdom and come across the Flame Princess. She's in a bad mood so you try to cheer her up by talking about your favorite thing. What do you talk to her about?
    `,
    choices: [{
        id: 'apples',
        description: 'How delicious apples are.',
        treeTrunks: 1,
    }, {
        id: 'music',
        description: 'Your favorite band.',
        marceline: 1,
    }, {
        id: 'boys',
        description: 'Which boys you think are cute.',
        lsp: 1,
    }, {
        id: 'candy',
        description: 'What types of candy she thinks are best',
        bubblegum: 1,
    }, {
        id: 'video games',
        description: 'Your high score on your favorite video game.',
        bmo: 1,
    }]
};

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

const idealDayQ = {
    id: 'candyKingdom',
    title: 'Candy Kingdom',
    // Update this
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../assets/candy-kingdom.png',
    description: `The people of the Candy Kingdom decide to celebrate the day in your honor. Peppermint Butler says that you get to choose how everyone celebrates. How will you and spend your day?`,
    choices: [{
        id: 'science',
        description: 'Making exciting new scientific discoveries together.',
        bubblegum: 1,
    }, {
        id: 'baking',
        description: 'Baking delicious treats for a fun party.',
        treeTrunks: 1,
    }, {
        id: 'videoGames',
        description: 'Playing new and exciting video games together.',
        bmo: 1,
    }, {
        id: 'centerOfAttn',
        description: 'Everyone watching you in adoration as you sing songs and tell stories.',
        lsp: 1,
    }, {
        id: 'bass',
        description: 'Everyone makes sweet music together featuring you on your sick bass.',
        marceline: 1,
    }]
};

const challenges = [
    colorQ, 
    personalityQ,
    likesQ,
    dislikesQ,
    idealDayQ
];

export default challenges;