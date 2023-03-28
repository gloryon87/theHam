'use strict'

// Our services

const services = document.querySelector('.services ul')
const servicesContents = document.querySelectorAll('.services-content div')

services.addEventListener('mouseup', activateService)
services.addEventListener('keypress', activateService)

function activateService (event) {
  document.querySelector('.active-service').classList.remove('active-service')
  event.target.classList.add('active-service')
  servicesContents.forEach(element => {
    element.classList.add('hidden')
  })
  servicesContents[event.target.dataset.index].classList.remove('hidden')
}

// Our Work

const ourWork = document.querySelector('.our-work ul')
const ourImages = document.querySelectorAll('.our-work-images img')
let imagesVisible = 12
let imagesToShow = ourImages
let imageCategory = ''

for (let i = 0; i < ourImages.length; i++) {
  if (i >= imagesVisible) {
    ourImages[i].style.display = 'none'
  }
}

ourWork.addEventListener('mouseup', activateWork)
ourWork.addEventListener('keypress', activateWork)

const loadMore = document.getElementById('loadMore')

function showImages () {
  imagesVisible = 12
  ourImages.forEach(image => {
    image.style.display = 'none'
  })
  for (let i = 0; i < imagesToShow.length; i++) {
    if (i < imagesVisible) {
      imagesToShow[i].style.display = 'block'
    }
  }
  loadMore.style.display = 'inline-block'
}

function activateWork (event) {
  document.querySelector('.our-work-active').classList.remove('our-work-active')
  event.target.classList.add('our-work-active')
  imageCategory = event.target.dataset.category
  imagesToShow = Array.from(ourImages).filter(image => {
    return image.dataset.category.includes(imageCategory)
  })
  showImages()
}

// Our work LOAD MORE button

loadMore.addEventListener('click', () => {
  showLoader(), setTimeout(showMoreImages, 2000)
})

function showLoader () {
  document.querySelector('.our-work .lds-default').style.display =
    'inline-block'
  setTimeout(hideLoader, 2000)
}

function hideLoader () {
  document.querySelector('.our-work .lds-default').style.display = 'none'
}

function showMoreImages () {
  if (imagesVisible < 36) {
    imagesVisible += 12
  }
  for (let i = 0; i < ourImages.length; i++) {
    if (i < imagesVisible) {
      imagesToShow[i].style.display = 'block'
    }
  }
  if (imagesVisible >= 36) {
    loadMore.style.display = 'none'
  }
}

// What People Say About theHam

const quotes = document.querySelectorAll('.quote')
const quoters = document.querySelector('.quotes-carusel')

quoters.addEventListener('mouseup', activateQuoter)
quoters.addEventListener('keypress', activateQuoter)

function activateQuoter (event) {
  if (event.target === quoters) return
  let activeQuote = document.querySelector('.people-say .active')
  quotes.forEach(quote => {
    quote.style.opacity = 0
    quote.style.transition = 'opacity 500ms'
  })
  setTimeout(changeQuote, 500)
  if (event.target.closest('li').dataset.select === 'left') {
    if (quoteNumber > 1) {
      quoteNumber -= 1
    } else {
      quoteNumber = quotes.length
    }
  } else if (event.target.closest('li').dataset.select === 'right') {
    if (quoteNumber < quotes.length) {
      quoteNumber += 1
    } else {
      quoteNumber = 1
    }
  } else {
    quoteNumber = +event.target.closest('li').dataset.select
  }

  quotersImg.forEach(img => {
    img.style.transform = ''
  })
  moveQuotersImg()

  function changeQuote () {
    activeQuote.classList.add('hidden')
    activeQuote.classList.remove('active')
    quotes[quoteNumber - 1].classList.remove('hidden')
    quotes[quoteNumber - 1].classList.add('active')
    activeQuote = document.querySelector('.people-say .active')
    setTimeout(() => {
      activeQuote.style.opacity = 1
    }, 20)
  }
}

const quotersImg = document.querySelectorAll('.quotes-carusel img')
let quoteNumber = 3

function moveQuotersImg () {
  quotersImg[quoteNumber - 1].style.transform = 'translateY(-10px)'
}

moveQuotersImg()

// Masonry gallery

const elem = document.querySelector('.grid')
const msnry = new Masonry(elem, {
  itemSelector: '.grid-item',
  columnWidth: 378,
  gutter: 20
})

msnry.layout()

// Gallery LOAD MORE button

const loadMoreImg = document.querySelector('.gallery button')
const additionalImages = document.querySelectorAll('.grid .hidden')

loadMoreImg.addEventListener('click', () => {
  showGalleryLoader(), setTimeout(showMoreMasonry, 2000)
})

loadMoreImg.addEventListener('keypress', () => {
  showGalleryLoader(), setTimeout(showMoreMasonry, 2000)
})

function showMoreMasonry () {
  additionalImages.forEach(image => {
    image.classList.remove('hidden')
  })
  msnry.layout()
  loadMoreImg.style.display = 'none'
}

function showGalleryLoader () {
  document.querySelector('.gallery .lds-default').style.display = 'inline-block'
  setTimeout(hideGalleryLoader, 2000)
}

function hideGalleryLoader () {
  document.querySelector('.gallery .lds-default').style.display = 'none'
}
