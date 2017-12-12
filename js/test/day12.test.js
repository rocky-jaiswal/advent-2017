const { pipes } = require('../lib/day12')
const { readSampleData } = require('../lib/utils')

test('day 12 - sample', () => {
  expect(pipes(`
0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5`)
  ).toEqual(6)
})

test('day 12 - main', () => {
  expect(pipes(readSampleData('day12_input.txt'))).toEqual(115)
})
