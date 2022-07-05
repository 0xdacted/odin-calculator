const operatorButtons = document.querySelectorAll("[data-operator]");
const numberButtons = document.querySelectorAll("[data-number]");
const equalsButton = document.getElementById('equalsBtn');
const display = document.getElementById('display');
const clearButton = document.getElementById('clear');


const NUMBERS = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];
const OPERATORS = [
    "+", "-", "*", '/'
    ]

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

const operate = () => {
const inputs = display.textContent

    switch(operator) {
        case '+':
            return add(a,b)
            break;
            
        case '-':
            return subtract(a,b)
            break;
        
        case '*':
            return multiply(a,b)
            break;

        case '/':
            return divide(a,b)
            break;
    }
}

const clear = () => { 
    display.textContent = '';
  };

operatorButtons.forEach(button => {button.addEventListener('click', e => {
    display.append(button.textContent);
})});

numberButtons.forEach(button => {button.addEventListener('click', e => {
    display.append(button.textContent);
})})

equalsButton.addEventListener('click', operate)

clearButton.addEventListener('click', clear)

