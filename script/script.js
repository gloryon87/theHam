'use strict'

/**
 * Creates new user
 * @param {string} firstName
 * @param {string} lastName
 * @returns {object}
 */
const createNewUser = (firstName, lastName) => {
  let newUser = {
    _firstName: firstName,
    _lastName: lastName,
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
    }
  }

  Object.defineProperty(newUser, '_firstName', {
    writable: false
  })

  Object.defineProperty(newUser, '_lastName', {
    writable: false
  })

  // newUser.setFirstName("Petya")

  console.log(newUser, newUser.getLogin())
}

createNewUser('Vasya', 'Pupkin')
