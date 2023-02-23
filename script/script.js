'use strict'

/**
 * Creates new user
 * @param {string} firstName
 * @param {string} lastName
 * @returns {object}
 **/
const createNewUser = (firstName, lastName) => {
  let date
  do {
    date = prompt('Your birthday, dd.mm.yyyy')
  } while (isNaN(parseInt(date)) && date !== null)

  const newUser = {
    _firstName: firstName,
    _lastName: lastName,
    birthday: new Date(
      date.split('.')[1] + '.' + date.split('.')[0] + '.' + date.split('.')[2]
    ),
    getLogin () {
      return (
        this._firstName.charAt(0).toLowerCase() + this._lastName.toLowerCase()
      )
    },
    setFirstName (firstName) {
      Object.defineProperty(newUser, '_firstName', {
        writable: true
      })
      this._firstName = firstName
      Object.defineProperty(newUser, '_firstName', {
        writable: false
      })
    },
    setLastName (lastName) {
      Object.defineProperty(newUser, '_lastName', {
        writable: true
      })
      this._lastName = lastName
      Object.defineProperty(newUser, '_lastName', {
        writable: false
      })
    },
    getAge () {
      return parseInt((new Date() - this.birthday) / 31536000000)
    },
    getPassword () {
      return (
        this._firstName[0].toUpperCase() +
        this._lastName.toLowerCase() +
        this.birthday.getFullYear()
      )
    }
  }

  Object.defineProperty(newUser, '_firstName', {
    writable: false
  })

  Object.defineProperty(newUser, '_lastName', {
    writable: false
  })
  console.log(newUser, newUser.getAge(), newUser.getPassword())
}

createNewUser('Vasia', 'Pupkin')
