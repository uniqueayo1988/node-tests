module.exports.add = (a, b) => a + b

module.exports.square = (x) => x * x

module.exports.setName = (first, last) => {
  return `My name is ${first} and surname is ${last}`
}

// Asyc Tests
module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    // callback = () => a + b
    callback(a + b)
  }, 1000)
}

module.exports.asyncSquare = (x, callback) => {
  setTimeout(() => {
    callback(x * x)
  }, 1000)
}

// nodemon --exec 'npm test' // let's you watch you test suites
