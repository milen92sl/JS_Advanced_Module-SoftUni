const { assert } = require("console");

it('Should',() => {

    let expSum = 150;
    let numbers = [10,20,30,40,50,60];

    let startIndex = 3;
    let endIndex = 300;

    //act 
    let actualSum = solve(numbers,startIndex,endIndex);


    assert.equal(actualSum,expSum);
});

