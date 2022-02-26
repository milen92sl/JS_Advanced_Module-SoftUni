// Problem 3 LAB: 
function solve(input) {
    let firstEl = input.shift();
    let lastEl = input.pop();

    let firstNum = Number(firstEl);
    let lastNum = Number(lastEl);

    let sum = firstNum + lastNum;

    return sum;
}

solve(['20', '30', '40']);
//Problem 5 LAB: 
function smallestTwo(arr) {
    arr.sort((a, b) => a - b);
    let result = arr.slice(0, 2);
    return result.join(' ');
}

smallestTwo([30, 15, 50, 5]);

// Problem 1 Exercises: 
function printArr(arr,symbol) {
  console.log(arr.join(symbol));
}

printArr(['One', 'Two', 'Three', 'Four', 'Five'], '-');

// Problem 2 Exercises: 
function printArr(arr,step) {
    let resultArr = [];
    for(let i = 0; i < arr.length; i+=step){
        resultArr.push(arr[i]);
    }
    return resultArr;
  }

  printArr(['5', '20', '31', '4', '20'], 2);

// Problem 3 : 

function printArr(commands) {
    let output = [];
    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i];
        if (currentCommand == 'add') {
            output.push(i + 1);
        } else if (currentCommand == 'remove') {
            output.pop();
        }
    }

    if(output.length === 0)
    console.log('Empty')
    else{
        console.log(output.join('\n'));
    }
}
printArr(['remove', 
'remove', 
'remove']
);

// Problem 4 : 

function printArr(array,rotations) {
    for(let i = 0; i < rotations; i++){
        let lastEl = array.pop();
        array.unshift(lastEl);
    }
    console.log(array.join(' '));
}
printArr(['1', '2', '3', '4'], 2);


//Problem 5 : 

function solve(array) {
    let newArr = [];
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= max) {
            max = array[i];
            newArr.push(array[i]);
        }
    }

    return newArr
};
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);

// Problem 6 : 

function solve(array) {
    let sorted = array.sort((a, b) =>a.localeCompare(b));
    let orderNum = 1;
    sorted.forEach((name) => {
        console.log(`${orderNum}.${name}`);
        orderNum++;
    });
};
solve(["John", "Bob", "Christina", "Ema"]);

// Problem 7 : 

function solve(array) {
    let resutlArr = [];
    array = array.sort((a, b) => a - b);

    while (array.length !== 0) {
        resutlArr.push(array.shift());
        resutlArr.push(array.pop());
    }
    let finalResult = resutlArr.filter((el) => {
        return typeof el !== 'undefined';
    })
    return resutlArr;
};
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

// Problem 8 : 

function sort(arr) {
    const result = arr.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        } else if (a.length == b.length) {
            return a.localeCompare(b);
        } else {
            return -1;
        }
    })
    console.log(result.join("\n"));
}
sort(['alpha',
    'beta',
    'gamma']);
sort(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);

// Problem 9 : 

function solve(array) {
    let sum = array[0].reduce((a, b) => a + b);

    for (let i = 0; i < array[0].length; i++) {
        let currentColSum = 0;

        for (let j = 0; j < array.length; j++) {
            currentColSum += array[j][i];
        }

        if (currentColSum !== sum) {
            return false;
        }
    }
    return true;
}

solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);

// Problem **10 : 

function ticTacToe(coordinates) {
    const matrix = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let player = 'X';

    for (let i = 0; i < coordinates.length; i++) {
        const moves = coordinates[i].split(' ');
        const x = moves[0];
        const y = moves[1];

        if (matrix[x][y] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        matrix[x][y] = player;

        const winner = checkIfSomeoneWin();
        if (winner !== null) {
            console.log(`Player ${winner} wins!`);
            break;
        }

        const finished = checkForFreeSpaces();
        if (!finished) {
            console.log('The game ended! Nobody wins :(');
            break;
        }

        player = player === 'X' ? 'O' : 'X';
    }

    matrix.forEach(row => { console.log(row.join('\t')); });

    function checkIfSomeoneWin() {
        if (matrix[0][0] === matrix[0][1] && matrix[0][1] === matrix[0][2] && matrix[0][2] === player) { return player; }
        if (matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2] && matrix[1][2] === player) { return player; }
        if (matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2] && matrix[2][2] === player) { return player; }

        if (matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0] && matrix[2][0] === player) { return player; }
        if (matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1] && matrix[2][1] === player) { return player; }
        if (matrix[0][2] === matrix[1][2] && matrix[1][2] === matrix[2][2] && matrix[2][2] === player) { return player; }
        
        if (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] && matrix[2][2] === player) { return player; }
        if (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] && matrix[2][0] === player) { return player; }

        return null;
    }

    function checkForFreeSpaces() {
        let finished = false;
        for (let row = 0; row < matrix.length; row++) {
            if (matrix[row].includes(false)) {
                finished = true;
            }
        }

        return finished;
    }
}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);

// Problem **11 : 

function solve(input) {
    
    let matrix = [];

    while (input.length > 0) {
        matrix.push(input.shift().split(' ').map(Number));
    }

    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - 1 - i]
    }
    if(primaryDiagonal === secondaryDiagonal){

        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix.length; j++){

                if((j !== matrix.length - 1 - i) && j !== i){
                    matrix[i][j] = primaryDiagonal;
                }
            }
        }
    }
    for(let i = 0; i < matrix.length; i++){
         console.log(matrix[i].join(' '));
    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);

// Problem 12*: 
function orbit(arr) {
    let rows = arr[0];
    let cols = arr[1];
    let x = arr[2];
    let y = arr[3];

    let matrix = new Array(rows).fill().map(() => new Array(cols).fill(0));
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);

// Problem 13*: 
function spiralMatrix(row, col) {
    let matrix = new Array(row).fill().map(() => new Array(col).fill(0));

    let counter = 1;
    let startCol = 0;
    let endCol = col - 1;
    let startRow = 0;
    let endRow = row - 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = counter++;
        }

        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            matrix[j][endCol] = counter++;
        }

        endCol--;
        for (let i = endCol; i >= startCol; i--) {
            matrix[endRow][i] = counter++;
        }

        endRow--;
        for (let j = endRow; j >= startRow; j--) {
            matrix[j][startCol] = counter++;
        }

        startCol++;
    }

    matrix.forEach(row => console.log(row.join(' '))); // print every row of matrix
}
spiralMatrix(5, 5);
spiralMatrix(3, 3);