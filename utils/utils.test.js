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

it('It should asyc add two numbers', (done) => {
  utils.asyncAdd(3, 4, (sum) => {
    expect(sum).toBe(7)
    done()
  })
})

it('It should square a number', (done) => {
  utils.asyncSquare(3, (square) => {
    expect(square).toBe(9)
    done()
  })
})

// nodemon --exec 'npm test' // let's you watch you test suites
