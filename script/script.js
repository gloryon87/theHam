'use strict'
let userAge = prompt('Your age?')
while (userAge !== null && (isNaN(userAge) || +userAge === 0)) {
  userAge = prompt('Your age?', `${userAge}`)
}
if (+userAge >= 22) {
} else if (+userAge >= 18) {
  if (confirm('Are you sure you want to continue?')) {
  } else {
    alert('You are not allowed to visit this website.')
    exit
  }
} else {
  alert('You are not allowed to visit this website.')
  exit
}
let userName = prompt('Your name')
while (userName !== null && userName === "") {
  userName = prompt('Your name', `${userName}`)
}
if (userName === null) {
  alert('You are not allowed to visit this website.')
  exit
}
alert(`Welcome, ${userName}`)
