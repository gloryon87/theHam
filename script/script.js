'use strict';

let userNumber;

do {
userNumber = prompt("Enter number", 0);
} while (userNumber % 1 !==0);

if (userNumber <5 && userNumber >-5) {
    console.log("Sorry, no numbers");
}

for (let i = 5; i <= userNumber; i+=5) {
    console.log(i);
}

for (let i = -5; i >= userNumber; i-=5) {
    console.log(i);
}

let m = prompt("Enter first number", 2);
let n = prompt("Enter second number", 3);

while (m > n) {
    alert ("Error");
    m = prompt("Enter first number", 2);
    n = prompt("Enter second number", 3);
}

if (m < 2) {
    m = 2;
}

primeNumbers:
for (let i = m; i <= n; i++) {
    for (let j = m; j < i; j++) {
        if (i % j == 0) continue primeNumbers; 
    }
    console.log(i);
}
