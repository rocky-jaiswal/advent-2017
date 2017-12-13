const buildData = (input) => {
  const lines = input.split('\n').filter((l) => l.trim() !== '')

  return Array(parseInt(lines[lines.length - 1].split(':')[0]) + 1)
    .fill(null).reduce((acc, e, idx) => {
      const matches = lines.filter((line) => line.match(new RegExp(`^${idx}:`)))
      if (matches.length === 1) {
        acc[idx] = { arr: Array(parseInt(matches[0].split(':')[1].trim())).fill(0), direction: 'd' }
        return acc
      } else {
        acc[idx] = { arr: [], direction: 'd' }
        return acc
      }
    }, {})
}

const updatePosition = (arr, direction) => {
  if (arr.length === 0) {
    return { arr, direction }
  }

  const newArr = Array(arr.length).fill(0)
  let newDirection = direction
  const currentPosition = arr.indexOf(1)

  if (direction === 'd' && currentPosition < (arr.length - 1)) {
    newArr[currentPosition + 1] = 1
    return { arr: newArr, direction: newDirection }
  }
  if (direction === 'd' && currentPosition === arr.length - 1) {
    newArr[currentPosition - 1] = 1
    newDirection = 'u'
    return { arr: newArr, direction: newDirection }
  }
  if (direction === 'u' && currentPosition === 0) {
    newArr[1] = 1
    newDirection = 'd'
    return { arr: newArr, direction: newDirection }
  }
  if (direction === 'u') {
    newArr[currentPosition - 1] = 1
    return { arr: newArr, direction: newDirection }
  }
  return { arr: newArr, direction: newDirection }
}

const firewall = (input) => {
  const sample = buildData(input)
  const times = Object.keys(sample).length
  const collisions = []
  let userAt = -1

  Array(times).fill(null).forEach((i, run) => {
    Object.keys(sample).forEach((key) => {
      sample[key] = updatePosition(sample[key].arr, sample[key].direction)
    })
    userAt = userAt + 1

    // console.log(userAt)
    // console.log(sample)

    Object.keys(sample).forEach((key) => {
      if (sample[key].arr[0] === 1 && `${userAt}` === `${key}`) {
        collisions.push(key)
      }
    })
  })

  return collisions
    .map((c) => c * sample[parseInt(c)].arr.length)
    .reduce((acc, e) => acc + e)
}

module.exports = {
  buildData,
  firewall
}
