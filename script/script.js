'use strict'

// HW19

const teamMembers = [2, 5, 4]
const backlog = [50, 40, 30]
let deadline = new Date('March 13, 2023 19:00:00')

/**
 * Function checkDeadline checks if team can deliver project before deadline
 * @param {array} teamMembers
 * @param {array} backlog
 * @param {Date} deadline
 * @returns {boolean}
 */
function checkDeadline (teamMembers, backlog, deadline) {
  function sum (a, b) {
    return a + b
  }

  let daysBeforeDeadline = 0
  for (let i = new Date(); i <= deadline; i.setDate(i.getDate() + 1)) {
    if (new Date(i).getDay() !== 0 && new Date(i).getDay() !== 6) {
      daysBeforeDeadline += 1
    }
  }

  const daysOfWork = backlog.reduce(sum, 0) / teamMembers.reduce(sum, 0)

  if (daysBeforeDeadline >= daysOfWork) {
    alert(
      `Усі завдання будуть успішно виконані за ${Math.floor(
        daysBeforeDeadline - daysOfWork
      )} днів до настання дедлайну!`
    )
    return true;
  } else {
    alert(
      `Команді розробників доведеться витратити додатково ${Math.ceil(
        (daysOfWork - daysBeforeDeadline) * 8
      )} годин після дедлайну, щоб виконати всі завдання в беклозі`
    )
    return false;
  }
}

// checkDeadline(teamMembers, backlog, deadline)
