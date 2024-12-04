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
const decimalBtn = document.querySelector("#decimal");

const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const operateBtn = document.querySelector("#operate");

const clearBtn = document.querySelector(".button-clear");

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

    if ((numOne == 0 || numTwo == 0) && operator == "divide") {
        alert("You can not divide by 0 zero, dummy.")

        num1 = "";
        operator = "";
        num2 = "";
    
        display.textContent = "0";

        return;
    }

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
    if (number == ".") {
        
        if (display.textContent.includes(".")) {
            return;
        }

        if (!operator && !num1) {
            display.textContent = "0.";
            num1 = "0."
            return;
        } else if (!display.textContent) {
            display.textContent = "0.";
            return;
        }

    }

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

        if (!num2) {
            num2 = number.toString();
        } else {
            num2 += number.toString();
        }

    }

}

// choices: "add", "subtract", "multiply" or "divide"
function clickOperator(operatorChoice) {
    
    display.textContent = "";

    if (operator) {
        num1 = operate(+num1, +num2, operator);
        display.textContent = "";

        num2 = "";
        operator = operatorChoice;
    }

    operator = operatorChoice;

}

addBtn.addEventListener("click", () => {
    clickOperator("add");
})

subtractBtn.addEventListener("click", () => {
    clickOperator("subtract");
})

multiplyBtn.addEventListener("click", () => {
    clickOperator("multiply");
})

divideBtn.addEventListener("click", () => {
    clickOperator("divide");
})

operateBtn.addEventListener("click", () => {
    
    if (!operator || !num2) {
        alert("You need to choose an operator and second number");
        return;
    }
    
    const total = operate(+num1, +num2, operator);

    display.textContent = total;
    num1 = total;
    num2 = "";
    operator = "";
})

num0btn.addEventListener("click", () => {
    clickNumber(0);
})

num1btn.addEventListener("click", () => {
    clickNumber(1);
})

num2btn.addEventListener("click", () => {
    clickNumber(2);
})

num3btn.addEventListener("click", () => {
    clickNumber(3);
})

num4btn.addEventListener("click", () => {
    clickNumber(4);
})

num5btn.addEventListener("click", () => {
    clickNumber(5);
})

num6btn.addEventListener("click", () => {
    clickNumber(6);
})

num7btn.addEventListener("click", () => {
    clickNumber(7);
})

num8btn.addEventListener("click", () => {
    clickNumber(8);
})

num9btn.addEventListener("click", () => {
    clickNumber(9);
})

decimalBtn.addEventListener("click", () => {
    clickNumber(".");
})

clearBtn.addEventListener("click", () => {
    num1 = "";
    operator = "";
    num2 = "";

    display.textContent = "0";
})