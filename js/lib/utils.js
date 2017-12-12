const FS = require('fs')

const readSampleData = (filename) => {
  return FS.readFileSync(`${__dirname}/../test/${filename}`).toString()
}

const unique = (arr) => {
  return Object.keys(arr.reduce((acc, e) => {
    acc[e] = true
    return acc
  }, {}))
}

module.exports = {
  readSampleData,
  unique
}
