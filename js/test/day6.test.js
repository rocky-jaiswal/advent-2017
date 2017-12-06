const { reallocate } = require('../lib/day6')

test('day 6 - sample', () => {
  expect(reallocate([0, 2, 7, 0])).toEqual(5)
})

test('day 6 - main', () => {
  const input = '10 3 15 10 5 15 5 15 9 2 5 8 5 2 3 6'
  const arr = input.split(/\s/).map((e) => parseInt(e))
  expect(reallocate(arr)).toEqual(5)
})
