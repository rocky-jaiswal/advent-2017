const { readSampleData } = require('./utils')

const parseSum = (filename = 'day9_sample.txt') => {
  const input = readSampleData(filename).split('')

  let groupStarted = false
  let garbageStarted = false
  let ignoreStarted = false
  let group = []
  let nested = 0
  const groups = []
  let totalGarbage = 0

  input.forEach((i) => {
    if (!ignoreStarted) {
      if (i === '!') {
        ignoreStarted = true
        return
      }
      if (i === '>') {
        garbageStarted = false
        return
      }
      if (!garbageStarted) {
        if (i === '<') {
          garbageStarted = true
          return
        }
        if (!groupStarted && i === '{') {
          nested = nested + 1
          groupStarted = true
          group.push(i)
          return
        }
        if (groupStarted && i === '{') {
          nested = nested + 1
          group.push(i)
          return
        }
        if (groupStarted && i === '}') {
          group.push(i)
          nested = nested - 1
          if (nested === 0) {
            groups.push(group)
            groupStarted = false
            group = Array.from([])
          }
        }
      } else {
        totalGarbage = totalGarbage + 1
      }
    } else {
      ignoreStarted = false
    }
  })

  // console.log(groups.map((g) => g.join('')))
  console.log(totalGarbage)

  return groups
    .map((g) => g.join(''))
    .map((grp) => {
      const chars = grp.split('')
      const nested = []
      let n = 0
      chars.forEach((c) => {
        if (c === '{') {
          n = n + 1
        }
        if (c === '}') {
          nested.push(n)
          n = n - 1
        }
      })
      return nested
    })
    .map((g) => g.reduce((acc, e) => acc + e))
    .reduce((acc, e) => acc + e)
}

module.exports = {
  parseSum
}
