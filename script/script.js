'use strict'

// HW9

const array = [
  'Kharkiv',
  'Kyiv',
  ['Boryspil', 'Irpin'],
  'Odesa',
  'Lviv',
  'Dnipro'
]

/**
 * Inserts list from array on page
 * @param {array} array
 * @param {Element} parent=document.body
 * @returns {undefined}
 */
function insertList (array, parent = document.body) {
  const html = `<ul>${array.map(createList).join('')}</ul>`
  parent.insertAdjacentHTML('beforeend', html)
  function createList (elem) {
    if (Array.isArray(elem)) {
      return `<ul>${elem.map(createList).join('')}</ul>`
    } else {
      return `<li>${elem}</li>`
    }
  }
  let timer = 3
  parent.insertAdjacentHTML(
    'beforeend',
    `<p id="timer">${timer} seconds left</p>`
  )
  setTimeout("document.body.innerHTML = ''", 3000)
  setInterval(runTimer, 1000)
  function runTimer () {
    if (timer === 1) {
      return
    }
    timer--
    document.getElementById('timer').textContent = `${timer} seconds left`
    
  }
}

insertList(array)
