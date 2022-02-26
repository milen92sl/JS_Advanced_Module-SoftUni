//Problem 1:

function demo(fruit, weight, price) {
    let fruitType = fruit;
    let fruitWeight = weight;
    let pricePerKilo = price;

    let weightInKg = fruitWeight / 1000;
    let neededMoney = weightInKg * pricePerKilo;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`)
}

// demo('orange', 2500, 1.80);

// Problem 2:
function demo(a, b) {
    let fistNumber = Number(a);
    let secondNumber = Number(b);
    while (fistNumber !== secondNumber) {
        if (fistNumber > secondNumber) {
            fistNumber -= secondNumber;
        } else {
            secondNumber -= fistNumber;
        }
    }
    console.log(fistNumber);
}

demo(2154, 458);

//Problem 3: 

function demo(input) {
    let inputNumber = input.toString();
    let isSame = true;
    let sumOfTheDigits = 0;
    let digitToCompare = inputNumber[0];
    const numberL = inputNumber.length;

    for (let i = 0; i < numberL; i++) {
        sumOfTheDigits += +inputNumber[i];

        if (inputNumber[i] !== digitToCompare) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sumOfTheDigits);

}
// demo(2222222);

//Problem 4: 
function demo(year, month, day) {
    let dateInput = `${year}-${month}-${day}`;
    let date = new Date(dateInput);
    date.setDate(date.getDate() - 1);

    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)

}
// demo(2016, 10, 1);

//Problem 5: 
function demo(steps, footprint, speedInKmH) {

    let distance = steps * footprint;
    let speed = speedInKmH * 1000 / 3600;
    let rest = Math.floor(distance / 500) * 60; //check formating...
    let time = (distance / speed) + rest;
    let hours = Math.floor(time / 3600).toFixed(0).padStart(2, '0');
    let minutes = Math.floor(time / 60).toFixed(0).padStart(2, '0');
    let seconds = (time % 60).toFixed(0).padStart(2, '0');;

    console.log(`${hours}:${minutes}:${seconds}`)
}
// demo(4000, 0.60, 5);

//Problem 7: 

function demo(num, p1, p2, p3, p4, p5) {

    let inputAsNumber = Number(num);
    let arrayOfCommands = [p1, p2, p3, p4, p5];

    let chop = function () {
        return inputAsNumber / 2;
    };
    let dice = function () {
        return Math.sqrt(inputAsNumber);
    };
    let spice = function () {
        return inputAsNumber + 1;
    };
    let bake = function () {
        return inputAsNumber * 3;
    };
    let fillet = function () {
        return inputAsNumber * 0.80;
    };

    for (let i = 0; i < arrayOfCommands.length; i++) {
        let currentCommand = arrayOfCommands[i];
        switch (currentCommand) {
            case 'chop':
                inputAsNumber = chop(inputAsNumber);
                break;
            case 'dice':
                inputAsNumber = dice(inputAsNumber);
                break;
            case 'spice':
                inputAsNumber = spice(inputAsNumber);
                break;
            case 'bake':
                inputAsNumber = bake(inputAsNumber);
                break;
            case 'fillet':
                inputAsNumber = fillet(inputAsNumber);
                break;
        }
        console.log(inputAsNumber)
    }
}

// demo('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

//Problem 6: 
function solve(speed, area) {

    let info = '';
    let speedLimit = 0;
    let difference = 0;
    let status = '';
    if (area === 'city') {
        speedLimit = 50;
    } else if (area === 'residential') {
        speedLimit = 20;
    } else if (area === 'interstate') {
        speedLimit = 90;
    } else if (area === 'motorway') {
       speedLimit = 130;
    }
    if (speed <= speedLimit && speed > 0) {
        info = `Driving ${speed} km/h in a ${speedLimit} zone`
    } else {
        difference = speed - speedLimit;
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference > 20 && difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        info = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    }
    console.log(info);
}

// solve(40, 'city');

//Problem 8: 
function validityChecker(x1, y1, x2, y2) {

    function distance(x1, y1, x2, y2) {
        let distH = x1 - x2;
        let distY = y1 - y2;
        return Math.sqrt(distH ** 2 + distY ** 2);
    }

    if (Number.isInteger(distance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

//Problem 9: 
function solve(text) {

    let result = text.toUpperCase()
        .split(/[\W]+/)
        .filter(w => w.length > 0)
        .join(", ");

    console.log(result);
}
