const FS = require('fs')

const readSampleData = (filename) => {
  return FS.readFileSync(`${__dirname}/../test/${filename}`).toString()
}

module.exports = {
  readSampleData
}
