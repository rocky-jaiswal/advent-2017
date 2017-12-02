const toArr = (line) => line.split(/\s/).map((e) => parseInt(e))

const maxMinDiff = (arr) => arr.reduce((m, e) => e > m ? e : m) - arr.reduce((m, e) => m > e ? e : m)

const checksum = (input) => input.split('\n').map(toArr).map(maxMinDiff).reduce((acc, e) => acc + e)

module.exports = {
  maxMinDiff,
  toArr,
  checksum
}
