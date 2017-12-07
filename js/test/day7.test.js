const { findRoot } = require('../lib/day7')

test('day 7 - sample', () => {
  expect(findRoot()).toContain('tknk')
})

test('day 7 - main', () => {
  expect(findRoot('day7_input.txt')).toContain('ykpsek')
})
