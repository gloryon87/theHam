'use strict'

//HW 17

let className;
let grade;

const student = {
  name: prompt("Your name"),
  lastName: prompt("Your lastname"),
  grades: {},
  tabel: [],
  getGrades() { do {
    className = prompt("class name")
    if (className === null) {
      return false;
    }
    grade = prompt("Your grade")
    this.grades[className] = grade
    this.tabel.push(+grade)

  } while (className !== null)
  },
  checkGrades(grade) {
    return grade > 3;
  },
  }

student.getGrades();

console.log(student);

if (student.tabel.every(student.checkGrades)) {
  alert("Студент переведено на наступний курс")
}

if (student.tabel.reduce((a,b) => a + b, 0)/student.tabel.length > 7) {
  alert("Студенту призначено стипендію")
}

// HW18

// const object = {
//   name: 'dwsdwf',
//   eded: {
//     number: 5,
//     dfdef: {
//       string: 'bla'
//     }
//   }
// }

// console.log(object)

// function cloneObject (object) {
//   if (typeof object !== 'object') {
//     return object
//   }
//   const newObject = Array.isArray(object) ? [] : {}
//   for (let key in object) {
//     newObject[key] = cloneObject(object[key])
//   }
//   return newObject
// }

// const newObject = cloneObject(object)

// console.log(newObject)

// HW19

// const teamMembers = [2, 5, 4]
// const backlog = [50, 40, 30]
// let deadline = new Date('March 13, 2023 19:00:00')

// /**
//  * Function checkDeadline checks if team can deliver project before deadline
//  * @param {array} teamMembers
//  * @param {array} backlog
//  * @param {Date} deadline
//  * @returns {boolean}
//  */
// function checkDeadline (teamMembers, backlog, deadline) {
//   function sum (a, b) {
//     return a + b
//   }

//   let daysBeforeDeadline = 0
//   for (let i = new Date(); i <= deadline; i.setDate(i.getDate() + 1)) {
//     if (new Date(i).getDay() !== 0 && new Date(i).getDay() !== 6) {
//       daysBeforeDeadline += 1
//     }
//   }

//   const daysOfWork = backlog.reduce(sum, 0) / teamMembers.reduce(sum, 0)

//   if (daysBeforeDeadline >= daysOfWork) {
//     alert(
//       `Усі завдання будуть успішно виконані за ${Math.floor(
//         daysBeforeDeadline - daysOfWork
//       )} днів до настання дедлайну!`
//     )
//     return true;
//   } else {
//     alert(
//       `Команді розробників доведеться витратити додатково ${Math.ceil(
//         (daysOfWork - daysBeforeDeadline) * 8
//       )} годин після дедлайну, щоб виконати всі завдання в беклозі`
//     )
//     return false;
//   }
// }

// checkDeadline(teamMembers, backlog, deadline)
