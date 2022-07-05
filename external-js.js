const operatorButtons = document.querySelectorAll("[data-operator]");
const numberButtons = document.querySelectorAll("[data-number]");
const equalsButton = document.getElementById('equalsBtn');
const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const operationScreen = document.getElementById('operationScreen');



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

const selectOperation = () => {
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
    operationScreen.textContent = '';
  };

operatorButtons.forEach(button => {button.addEventListener('click', e => {
    operationScreen.append(button.textContent);
    selectOperation;
})});

numberButtons.forEach(button => {button.addEventListener('click', e => {
        display.append(button.textContent);
    
})})

equalsButton.addEventListener('click', operate)

clearButton.addEventListener('click', clear)

