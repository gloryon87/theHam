'use strict'

function filterBy(array, type) {
  const newArray = [];
  array.forEach(checkType);
  function checkType(element) {
    if (typeof element !== type) {
      newArray.push(element)
    }
  }
  return newArray;
  // return array.filter(checkType)
  // always filters 0, null and other falsy values
}

console.log(filterBy(['hello', 'world', 23, '23', null], 'string'));






// let n;
// function calculateFibonacci (F0, F1) {
//   do { 
//   n = Math.abs(prompt("Enter the number"))
// } while (n !== null && isNaN(n));

// let fibonacciNumber = [F0, F1]
// for (let i = 2; i <= n-1; i++ ) {
//   fibonacciNumber.push(fibonacciNumber[i-2]+fibonacciNumber[i-1])
// }

// alert(fibonacciNumber[n-1]);

// }

// calculateFibonacci(0,1)

