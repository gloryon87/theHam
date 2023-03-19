'use strict'

// HW13

const images = document.querySelectorAll('.image-to-show')
let imageNumber = 0
let timerId = setInterval(showImages, 3000)
fadeIn(images[imageNumber])
let timeoutId = setTimeout(() => fadeOut(images[imageNumber]), 2750)
let secondsId
let msId


function showImages () {
  images.forEach(image => image.classList.add('image-hidden'))
  timeoutId = setTimeout(() => fadeOut(images[imageNumber]), 2750)
  imageNumber += 1
  if (imageNumber >= images.length) {
    imageNumber = 0
  }
  images[imageNumber].classList.remove('image-hidden')
  fadeIn(images[imageNumber])
}

function stopTimer() {
  clearTimeout(timeoutId)
  clearInterval(timerId)
  clearInterval(secondsId)
  clearInterval(msId)
}

/*
виникла проблема - при виклику stopTimer в деякий момент, коли на таймері
лишається менше секунди - спрацьовує fadeOut і зникає картинка. FadeOut
перебиває stopTimer. Умова для fadeOut теж не спрацювала. Тож я додав функцію,
що повертая картинці opacity 1 через 500ms (менше теж не завжди працює)
*/

function showStopedImage() {
  setTimeout(() => {
    images[imageNumber].style.opacity = 1
  }, 500);
}

function addButtons () {
  const stopShowing = document.createElement('button')
  stopShowing.innerText = 'Припинити'
  document.body.append(stopShowing)
  stopShowing.className = 'button'
  stopShowing.addEventListener('click', stopTimer)
  stopShowing.addEventListener('click', showStopedImage)

  const resumeShowing = document.createElement('button')
  resumeShowing.innerText = 'Відновити показ'
  document.body.append(resumeShowing)
  resumeShowing.className = 'button'
  resumeShowing.addEventListener('click', function () {
    stopTimer()
    timerId = setInterval(showImages, 3000)
    setTimeout(() => fadeOut(images[imageNumber]), 2750)
    seconds = 2
    ms = 1000
    setTimer()
  })
}

addButtons()

function fadeOut (image) {
  setTimeout(() => {
    image.style.opacity = 0
    image.style.transition = 'opacity 250ms'
  }, 10)
}

function fadeIn (image) {
  setTimeout(() => {
    image.style.opacity = 1
    image.style.transition = 'opacity 250ms'
  }, 10)
}

const timer = document.createElement('div')
let seconds = 2
let ms = 1000
document.body.append(timer)
timer.innerText = `${seconds} seconds and ${ms} miliseconds left`

function setTimer () {
  secondsId = setInterval(() => {
    if (seconds > 0) {
      seconds -= 1
    } else {
      seconds = 2
    }
  }, 1000)
  
  msId = setInterval(() => {
    if (ms > 0) {
      ms -= 40
    } else {
      ms = 1000
    }
    timer.innerText = `${seconds} seconds and ${ms} miliseconds left`
  }, 40)
}

setTimer()

