const toArr = (line) => line.split(/\s/)

const isValid = (arr) => {
  // Handle the last empty line
  if (arr.length === 1 && arr[0] === '') {
    return false
  }
  return arr.length === Object.keys(arr.reduce((acc, e) => {
    acc[e] = true
    return acc
  }, {})).length
}

const isValidWithoutAnagrams = (arr) => {
  // Handle the empty line
  if (arr.length === 1 && arr[0] === '') {
    return false
  }
  return arr.length === Object.keys(arr.reduce((acc, e) => {
    acc[e.split('').sort().join('')] = true
    return acc
  }, {})).length
}

const passphrase = (input) => input.split('\n').map(toArr).map(isValid).filter((a) => a).length

module.exports = {
  toArr,
  isValid,
  isValidWithoutAnagrams,
  passphrase
}
