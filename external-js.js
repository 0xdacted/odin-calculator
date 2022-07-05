let operators = document.querySelectorAll("[data-operator]");
let numbers = document.querySelectorAll("[data-number]");

    const NUMBERS = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ]
    const OPERATORS = [
    "+", "-", "*", '/'
    ]

operators.forEach(operator => {operator.addEventListener('click', e => {
let selectOperator = operator.dataset.selection
const operator =  OPERATORS.find(operator => operator === selectOperator)})});

numbers.forEach(number => {number.addEventListener('click', e => {
    let selectNumber = number.dataset.selection
    const number = NUMBERS.find(number => number === select)
})})


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
