const reallocate = (input) => {
  // State
  let steps = 0
  const seen = [Array.from(input)]

  while (!duplicateExists(seen)) {
    let position = findMaxIndex(input)
    let max = input[position]
    let giveable = Math.floor(max / (input.length - 1)) <= 1 ? 1 : Math.floor(max / (input.length - 1))

    orderedIndexes(input.length, position).forEach((i) => {
      if (max - giveable >= 0) {
        input[i] = input[i] + giveable
        input[position] = max - giveable
        max = max - giveable
      }
    })

    seen.push(Array.from(input))
    steps += 1
    // console.log('-->' + steps)
    // console.log(seen)
  }

  return steps
}

const findMaxIndex = (arr) => arr.reduce((m, e, i) => e > arr[m] ? i : m, 0)

const duplicateExists = (arr) => {
  const obj = arr.map((a) => a.join('')).reduce((acc, a) => {
    acc[a] = true
    return acc
  }, {})
  return Object.keys(obj).length !== arr.length
}

const orderedIndexes = (length, endAt) => {
  const arr = Array(length).fill(null).map((_, i) => endAt + 1 + i >= length ? (endAt + 1 + i) - length : endAt + 1 + i)
  arr.pop() // the max element itself is not given anything
  return arr
}

module.exports = {
  reallocate
}
