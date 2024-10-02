const add = function(a, b) {
    return (a + b)
};

const subtract = function(a, b) {
	return (a - b)
};

const multiply = function(a, b) {
      return (a * b)
};

const divide = function (a, b) {
    return (a / b)
};

let num1 = 0;
let operator;
let num2 = 0;

const operate = function (operator, a, b) {
    if (operator === "+") {
        return add(a, b)
    }

    else if (operator === "-") {
        return subtract(a, b)
    }

    else if (operator === "*") {
        return multiply(a, b)
    }

    else if (operator === "/") {
        return divide(a, b)
    }

}

let displayValue = document.querySelector(".display")

const buttons = document.querySelectorAll('button');

    buttons.forEach(function(button) {
        button.addEventListener("click", function(){
            populateDisplay(button);
        })
    })

function populateDisplay(button) {
    console.log(button.innerText)
    displayValue.textContent += button.innerText;


    
}

