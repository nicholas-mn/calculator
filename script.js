let num1;
let operator;
let num2;

const display = document.querySelector(".display");

const num0btn = document.querySelector("#zero");
const num1btn = document.querySelector("#one");
const num2btn = document.querySelector("#two");
const num3btn = document.querySelector("#three");
const num4btn = document.querySelector("#four");
const num5btn = document.querySelector("#five");
const num6btn = document.querySelector("#six");
const num7btn = document.querySelector("#seven");
const num8btn = document.querySelector("#eight");
const num9btn = document.querySelector("#nine");

const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const operateBtn = document.querySelector("#operate");

const clearBtnm = document.querySelector(".button-clear");

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
        case "add":
            return add(numOne, numTwo);

        case "subtract":
            return subtract(numOne, numTwo);

        case "multiply":
            return multiply(numOne, numTwo);

        case "divide":
            return divide(numOne, numTwo);
    }

}

function clickNumber(number) {
    
    if (!operator && !num1) {
        display.textContent = "";
        display.textContent += number.toString();

        num1 = number;

        return;
    } else if (!operator) {
        display.textContent += number.toString();
        
        num1 = num1.toString() + number.toString();
        
        return;
    } else {
        display.textContent += number.toString();

        num2 = num2.toString() + number.toString();

    }

}

// choices: "add", "subtract", "multiply" or "divide"
function clickOperator(operatorChoice) {
    
    display.textContent = "";
    operator = operatorChoice;

}