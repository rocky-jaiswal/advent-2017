const { readSampleData } = require('./utils')

const findParentLines = (input) => {
  const lines = input.split('\n')
  return lines.filter((line) => line.indexOf('->') !== -1)
}

const findRoot = (filename = 'day7_sample.txt') => {
  // We do two things here -
  // 1. Select nodes which have children, store the children somewhere
  // 2. Discard nodes which are children themselves

  const input = readSampleData(filename)
  const parentLines = findParentLines(input)
  // console.log(parentLines)

  const parents = parentLines.map((pl) => pl.split('->')[0].trim())
  // console.log(parents)

  const children = parentLines
    .map((pl) => pl.split('->')[1].split(',').map((s) => s.trim()))
    .reduce((acc, a) => acc.concat(a), [])
  // console.log(children)

  return parents.filter((p) => !children.includes(p.split(/\s/)[0]))[0]
}

module.exports = {
  findRoot
}
