function subtract() {
    let firstNumber = document.getElementById('firstNumber');
    let firstAsNumber = Number(firstNumber.value);
    let secondNumber = document.getElementById('secondNumber');
    let secondAsNumber = Number(secondNumber.value);

    let result = firstAsNumber - secondAsNumber;
    let resultElement = document.getElementById('result');      
    resultElement.textContent = result;
}
