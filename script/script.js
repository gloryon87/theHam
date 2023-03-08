'use strict'

// HW10

const tabs = document.querySelectorAll(".tabs li")
const tabsContent = document.querySelectorAll(".tabs-content li")
const titles = document.querySelectorAll(".tabs-title")

for (const tab of tabs) {
    tab.addEventListener('click',  showContent)
}

/**
 * shows respective tab-content for tabs-title clicked on
 * in order by tabs-title data-order.
 */
function showContent () {
    for (const title of titles) {
        title.classList.remove("active")
    }
    for (const tab of tabsContent) {
        tab.classList.add("hidden")
    }
    this.classList.add("active")
    tabsContent[this.dataset.order].classList.remove("hidden")
}