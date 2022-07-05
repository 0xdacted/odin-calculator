let firstOperand = '';
let secondOperand = '';
let currentOperation = null;

const operatorButtons = document.querySelectorAll("[data-operator]");
const numberButtons = document.querySelectorAll("[data-number]");
const equalsButton = document.getElementById('equalsBtn');
const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const operationScreen = document.getElementById('operationScreen');

const appendNumber = (number) => {
    display.textContent += number;
}


const selectOperation = (sign) => {
    if (currentOperation !== null) evaluate();
    operationScreen.append(display.textContent);
    operationScreen.append(sign);
    firstOperand = display.textContent;
    currentOperation = sign;
    clear();
}

const evaluate = () => {
    if (currentOperation === null) return
    secondOperand = display.textContent;
    display.textContent = roundResult(operate(currentOperation, firstOperand, secondOperand))
    operationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    }

const roundResult = (number) => {
    return Math.round(number * 1000) / 1000
}

const operate = (operator, a, b) => {
a = Number(a);
b = Number(b);

    switch(operator) {
        case '+':
             return add(a,b)
            
        case '-':
            return subtract(a,b)

        case '*':
            return multiply(a,b)

        case '/':
            if (b === 0) return null
            else return divide(a,b)
    }
}


function clear() { 
    display.textContent = '';
    
  };

function clearAll() {
    display.textContent = '';
    operationScreen.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}


const add = (a,b) => { 
    return a + b;
  };

const subtract = (a,b) => {
	return a - b;
};

const multiply = (a,b) => {
    return a * b;
    };

const divide = (a,b) => {
    return a / b;
    };


operatorButtons.forEach(button => {button.addEventListener('click', () => selectOperation(button.textContent))});
    
numberButtons.forEach(button => {button.addEventListener('click', () => appendNumber(button.textContent))});
    
equalsButton.addEventListener('click', evaluate)
    
clearButton.addEventListener('click', clearAll)