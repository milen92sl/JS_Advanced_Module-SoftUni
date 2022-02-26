function printFullName(firstName, lastName){
    console.log(firstName + ' ' + lastName);
};

//Function invokation
printFullName('Petar', 'Ivanov');

console.log("Next .........")
// Function expression
let countDown = function(number = 10){
    for(let i = number; i > 0; i--){
        console.log(i);
    }
};
countDown();
console.log("Next .........")
//Arrow function 

let countUp = (max) => {
    for(let i = 0; i < max; i++){
        console.log(i);
    }
};
countUp(10);
console.log("Next .........")
//Return value:
function sum (a, b){
    return a + b;
}


let sumArrow = (a, b) => a + b;

let result = sum(1, 3);
console.log(result);
console.log("Next .........")

let firstName = 'Pesho';
console.log(firstName.toUpperCase())
console.log("Next .........")

// Exercises: Problem 1 - Echo Function 
function solve(input){
    console.log(input.length);
    console.log(input);
}

console.log("Next .........")

//Problem 3: 
function solve(num1, num2, num3){
    let result;

    if(num1 > num2 && num1 > num3){
        result = num1;
    }
    else if(num2 > num1 && num2 > num3){
        result = num2;
    }
    else if(num3 > num1 && num3 > num2){
        result = num3;
    }
    console.log('The largest number is ' + result + '.');
}

//Problem 4: 
function solve(input){
    let inputType = typeof(input);
    let result;
    if(inputType == 'number'){
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    }
    else {
        console.log('We can not calculate the circle area, because we receive a ' + inputType + '.')
    }
}

//Problem 5: 
function solve(num1, num2, operator){

    let result;
    switch (operator){
        case '+' : result = num1+num2; break;
        case '-' : result = num1-num2; break;
        case '/' : result = num1/num2; break;
        case '*' : result = num1*num2; break;
        case '%' : result = num1%num2; break;
        case '**' : result = num1**num2; break;
    }
    console.log(result);
}

//Problem 7: 
function solve(input){

    let result;
    switch (input){
        case 'Monday' : result = 1; break;
        case 'Tuesday' : result = 2; break;
        case 'Wednesday' : result = 3; break;
        case 'Thursday' : result = 4; break;
        case 'Friday' : result = 5; break;
        case 'Saturday' : result = 6; break;
        case 'Sunday' : result = 7; break;
        default : result = 'error'; break;
    }
    console.log(result);
}



