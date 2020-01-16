module.exports.add = (a, b) => a + b

module.exports.square = (x) => x * x

module.exports.setName = (first, last) => {
  return `My name is ${first} and surname is ${last}`
}

// nodemon --exec 'npm test' // let's you watch you test suites
