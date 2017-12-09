const { parseSum } = require('../lib/day9')

test('day 9 - sample', () => {
  expect(parseSum()).toBe(51)
})

test('day 9 - main', () => {
  expect(parseSum('day9_input.txt')).toBe(15922)
})
