const operatorButtons = document.querySelectorAll("[data-operator]");
const numberButtons = document.querySelectorAll("[data-number]");
const equalsButton = document.querySelector('equalsBtn');

const NUMBERS = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];
const OPERATORS = [
    "+", "-", "*", '/'
    ]

const DISPLAY = []

operatorButtons.forEach(button => {button.addEventListener('click', e => {
    DISPLAY.push(button.textContent);
})});

numberButtons.forEach(button => {button.addEventListener('click', e => {
    DISPLAY.push(button.textContent);
})})

equalsButton.addEventListener('click', e => {
    operate(DISPLAY);
})


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

const operate = (a, operator, b) => {
  
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
