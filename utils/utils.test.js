const utils = require('./utils')

it('should add two numbers', () => {
  var res = utils.add(33, 11)

  // if (res !== 44) {
  //   throw new Error(`Expected 44 but got ${res}`)
  // }

  expect(res).toBe(44)
  expect(res).toBeTruthy()
})

it('should square a number', () => {
  var res = utils.square(5)

  // if (res !== 25) {
  //   throw new Error(`Expected 25 but got ${res}`)
  // }

  expect(res).toBe(25)
})

it('should return user\'s name', () => {
  var name = utils.setName('ade', 'segun')

  expect(name).toBe(`My name is ade and surname is segun`)
})

// nodemon --exec 'npm test' // let's you watch you test suites
