const { crypto } = require('../lib/day10')

test('day 10 - sample', () => {
  expect(crypto()).toBe(12)
})

test('day 10 - main', () => {
  expect(crypto(256, [187, 254, 0, 81, 169, 219, 1, 190, 19, 102, 255, 56, 46, 32, 2, 216])).toBe(1980)
})
