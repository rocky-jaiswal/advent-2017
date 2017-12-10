const selectAndReverse = (beginAt, len, arr) => {
  // console.log('-----------')
  // console.log(beginAt, len)

  if (len === 0 || len === 1) {
    return Array.from(arr)
  }

  if (beginAt > arr.length) {
    beginAt = beginAt % arr.length
  }

  let range = 0
  const toSwitch = []
  while (range < len) {
    if (beginAt + range < arr.length) {
      toSwitch.push(beginAt + range)
    } else {
      toSwitch.push(beginAt + range - arr.length)
    }
    range = range + 1
  }
  const vals = toSwitch.map((i) => arr[i]).reverse()
  toSwitch.forEach((e, i) => {
    arr[e] = vals[i]
  })
  return Array.from(arr)
}

const crypto = (len = 5, input = [3, 4, 1, 5]) => {
  let arr = Array(len).fill(null).map((_, i) => i)
  let currentPos = 0
  input.forEach((len, idx) => {
    arr = selectAndReverse(currentPos, len, arr)
    currentPos = currentPos + input[idx] + idx
  })
  return arr[0] * arr[1]
}

module.exports = {
  crypto
}
