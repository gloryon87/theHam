'use strict'

// HW11

const inputWrappers = document.querySelectorAll('.input-wrapper')
const form = document.querySelector('.password-form')
const firstInput = document.getElementById('firstInput')
const secondInput = document.getElementById('secondInput')


inputWrappers.forEach(wrapper => {
  wrapper.addEventListener('click', function (event) {
    if (event.target.dataset.name === 'i') {
      event.target.classList.toggle('fa-eye-slash')
      for (const child of wrapper.children) {
        if (child.type === 'password') {
          child.type = 'text'
        } else if (child.type === 'text') {
          child.type = 'password'
        }
      }
    }
  })
})

form.addEventListener('submit', function (event) {
  event.preventDefault()
  let passw = /^(?=.*[a-zA-Z0-9!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{6,}$/
  if (firstInput.value === secondInput.value && firstInput.value.match(passw)) {
    alert('You are welcome')
    form.reset()
  } else {
    alert(
      'Потрібно ввести однакові значення, пароль має складатись щонайменше з 6 символів'
    )
    form.reset()
  }
})
