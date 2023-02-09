'use strict';

let firstNumber = prompt ("Enter number", 0);
let secondNumber = prompt ("Enter number", 0);

while (isNaN(parseInt(firstNumber)) || isNaN(parseInt(secondNumber))) {
    if (firstNumber !== null && secondNumber !== null) {
        firstNumber = prompt ("Enter number", firstNumber);
        secondNumber = prompt ("Enter number", secondNumber);
    }
    else {
        break;
    };
}

let operation = prompt ("Enter operation symbol (+, -, * or /)", "+");

while (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/" && operation !== null) {
    operation = prompt ("Enter operation symbol (+, -, * or /)", "+");
}

/**
 * Calculates firstNumber +, -, * or / secondNumber
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @param {symbol} operation
 * @returns {result}
 */
let calculate = (firstNumber, secondNumber, operation) => {
    switch (operation) {
        case "+":
            return (+firstNumber + +secondNumber);
            break;
    
        case "-":
            return (+firstNumber - +secondNumber);
            break;
        
        case "*":
            return (+firstNumber * +secondNumber);
            break;   
        
        case "/":
            return (+firstNumber / +secondNumber)
            break;
    }
}

console.log(calculate(firstNumber, secondNumber, operation));
