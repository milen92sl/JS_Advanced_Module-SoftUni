function solve(){
    let randomNumber = Math.random();

    if(randomNumber < 0.5){
        throw{
        message: 'Your number is too low.',
        type: 'Some_error_TYPE'
        }
    }

    return Math.floor(randomNumber * 100);
}

let number = getNumber();

module.exports = solve;