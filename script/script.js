'use strict'

// HW12

const buttons = document.querySelectorAll('.btn')
document.addEventListener('keydown', paintButton)
const buttonsText = Array.from(buttons).map(elem =>
  elem.innerText.toLowerCase()
)

function paintButton (e) {
  buttons.forEach(button => {
    if (buttonsText.includes(e.key.toLowerCase())) {
      button.classList.remove('btn-active')
    }
    if (button.innerText.toLowerCase() === e.key.toLowerCase()) {
      button.classList.add('btn-active')
    }
  })
}
