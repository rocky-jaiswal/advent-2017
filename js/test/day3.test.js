const { spiral } = require('../lib/day3')

test('day 3 - spiral sample', () => {
  expect(spiral(9)).toEqual(2)
  expect(spiral(23)).toEqual(2)
  expect(spiral(1024)).toEqual(31)
})

test('day 3 - spiral main', () => {
  expect(spiral(347991)).toEqual(480)
})
