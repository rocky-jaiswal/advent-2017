const { parseMax } = require('../lib/day8')

test('day 8 - sample', () => {
  expect(parseMax()).toBe(1)
})

test('day 8 - main', () => {
  expect(parseMax('day8_input.txt')).toBe(5075)
})
