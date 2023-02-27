'use strict'

//HW 16

let n;

/**
 * Calculetes n-th generalization of Fibonacci numbers
 * @param {number} F0
 * @param {number} F1
 * @alerts {number}
 */

function calculateFibonacci (F0, F1) {
  do { 
  n = Math.abs(prompt("Enter the number"))
} while (n !== null && isNaN(n));

let fibonacciNumber = [F0, F1]
for (let i = 2; i <= n-1; i++ ) {
  fibonacciNumber.push(fibonacciNumber[i-2]+fibonacciNumber[i-1])
}

alert(fibonacciNumber[n-1]);

}

calculateFibonacci(0,1)


// HW 17

// let className;
// let grade;

// const student = {
//   name: prompt("Your name"),
//   lastName: prompt("Your lastname"),
//   grades: {},
//   tabel: [],
//   getGrades() { do {
//     className = prompt("class name")
//     if (className === null) {
//       return false;
//     }
//     grade = prompt("Your grade")
//     this.grades[className] = grade
//     this.tabel.push(+grade)
          
//   } while (className !== null)
//   },
//   checkGrades(grade) {
//     return grade > 3;
//   },
//   }

// student.getGrades();

// console.log(student);

// if (student.tabel.every(student.checkGrades)) {
//   alert("Студент переведено на наступний курс")
// }

// if (student.tabel.reduce((a,b) => a + b, 0)/student.tabel.length > 7) {
//   alert("Студенту призначено стипендію")
// }



// HW18

// const object = {
//     name: 'dwsdwf',
//     eded: {
//         number: 5,
//         dfdef: {
//             string: 'bla',
//         },
//     }
// }

// console.log(object);
// let newObject = {};

// function cloneObject (object) {
//     for (const key in object)
//      {
//         if (typeof object[key] !== 'object') 
//         {newObject[key] = object[key];}
//         else {
//            newObject[key] = cloneObject (object[key])
//         }       
//     }

// }

// cloneObject(object);
// console.log(newObject);



