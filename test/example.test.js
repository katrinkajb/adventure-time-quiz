// IMPORT MODULES under test here:
import { getWinner } from '../results/results.utils.js';

const test = QUnit.test;

const testUser = {
    lsp: 2,
    bmo: 1,
    treeTrunks: 0,
    bubblegum: 1,
    marceline: 3,
};

// getWinner test
test('getWinner should take in a user and return the name of the highest scoring item in an array', (expect) => {
    // const namesArray = [
    //     'lsp',
    //     'bmo',
    //     'treeTrunks',
    //     'bubblegum',
    //     'marceline'
    // ];
    //Arrange
    // Set up your arguments and expectations
    const expected = 'marceline';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getWinner(testUser);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
