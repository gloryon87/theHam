"use strict"

let userNumber;

do {userNumber = prompt("Enter Number", 0)}
while (userNumber !== null && isNaN(parseInt(userNumber)));

const calculateFactorial = userNumber => {
    if (userNumber < 0)
    return -1;
    else if (userNumber == 0)
    return 1;
    else {
        return (userNumber * calculateFactorial(userNumber - 1));
    }
}

alert(calculateFactorial(userNumber));