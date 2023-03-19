'use strict'

// HW13

const images = document.querySelectorAll('.image-to-show')
let imageNumber = 0
let timeoutId
let intervalId
const timer = document.createElement('div')
let secondsId
let msId

function changeImage () {
  setTimer()
  timeoutId = setTimeout(() => {
    fadeOut(images[imageNumber])
    images[imageNumber].classList.add('image-hidden')
    imageNumber += 1
    if (imageNumber >= images.length) {
      imageNumber = 0
    }
    images[imageNumber].classList.remove('image-hidden')
    images[imageNumber].style.opacity = 0
    fadeIn(images[imageNumber])
  }, 2750)
}

function fadeOut (image) {
  setTimeout(() => {
    image.style.opacity = 0
    image.style.transition = 'opacity 250ms'
  })
}

function fadeIn (image) {
  setTimeout(() => {
    image.style.opacity = 1
    image.style.transition = 'opacity 250ms'
  }, 250)
}

function clear () {
  clearTimeout(intervalId)
  clearTimeout(timeoutId)
  clearTimeout(secondsId)
  clearTimeout(msId)
  timer.remove()
}

function addButtons () {
  const stopShowing = document.createElement('button')
  stopShowing.innerText = 'Припинити'
  document.body.append(stopShowing)
  stopShowing.className = 'button'
  stopShowing.addEventListener('click', clear)
  const resumeShowing = document.createElement('button')
  resumeShowing.innerText = 'Відновити показ'
  document.body.append(resumeShowing)
  resumeShowing.className = 'button'
  resumeShowing.addEventListener('click', showImages)
}

addButtons()

function showImages () {
  clear()
  changeImage()
  intervalId = setInterval(() => {
    changeImage()
  }, 3000)
}

function setTimer () {
  clearTimeout(secondsId)
  clearTimeout(msId)
  timer.remove()
  let seconds = 2
  let ms = 1000
  document.body.append(timer)
  timer.innerText = `${seconds} seconds and ${ms} miliseconds left`

  secondsId = setInterval(() => {
      seconds -= 1
  }, 1000)

  msId = setInterval(() => {
    if (ms > 0) {
      ms -= 100
    } else {
      ms = 1000
    }
    timer.innerText = `${seconds} seconds and ${ms} miliseconds left`
  }, 100)
}
