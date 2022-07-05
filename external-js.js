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


    let operators = document.querySelectorAll("[data-operator]");

    const OPERATORS = [
    "+", "-", "*", '/'
    ]


const operate = (a, operator, b) => {
    operators.forEach(operator => {operator.addEventListener('click', e => {
    let select = operator.dataset.selection
    const operator =  OPERATORS.find(operator => operator === select)
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
});
})}