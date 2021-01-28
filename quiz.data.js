const colorQ = {
    id: 'color',
    title: 'Ice Kingdom',
    // Update this
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'monsters.jpg',
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
    }, 
    {
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

const challenges = [
    colorQ, 
    
];

export default challenges;