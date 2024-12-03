let num1;
let operator;
let num2;

function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    return numOne / numTwo;
}

function operate(numOne, numTwo, chosenOperator) {

    switch(chosenOperator) {
        case "+":
            return add(numOne, numTwo);

        case "-":
            return subtract(numOne, numTwo);

        case "*":
            return multiply(numOne, numTwo);

        case "/":
            return divide(numOne, numTwo);
    }

}