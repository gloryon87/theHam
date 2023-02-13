'use strict'

/**
 * Creates new user
 * @param {string} firstName
 * @param {string} lastName
 * @returns {object}
 */
const createNewUser = (firstName, lastName) => {
  let newUser = {
    firstName,
    lastName,
    getLogin () {
      return (
        this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase()
      )
    },
    setFirstName (firstName) {
      Object.defineProperty(newUser, 'firstName', {
        writable: true
      })
      this.firstName = firstName
      Object.defineProperty(newUser, 'firstName', {
        writable: false
      })
    },
    setLastName (lastName) {
      Object.defineProperty(newUser, 'lastName', {
        writable: true
      })
      this.lastName = lastName
      Object.defineProperty(newUser, 'lastName', {
        writable: false
      })
    }
  }

  Object.defineProperty(newUser, 'firstName', {
    writable: false
  })

  Object.defineProperty(newUser, 'lastName', {
    writable: false
  })

  console.log(newUser, newUser.getLogin())
}

createNewUser('Vasya', 'Pupkin')
