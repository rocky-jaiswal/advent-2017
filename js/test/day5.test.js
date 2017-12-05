const { solveMaze, prepareInput } = require('../lib/day5')

test('day 5 - sample', () => {
  expect(solveMaze([0, 3, 0, 1, -3])).toEqual(5)
})

test('day 5 - main', () => {
  expect(solveMaze(prepareInput())).toEqual(343364)
})
