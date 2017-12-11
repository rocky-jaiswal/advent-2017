const { hexGridWalker, dist } = require('../lib/day11')
const { readSampleData } = require('../lib/utils')

test('day 11 - part 1', () => {
  expect(hexGridWalker('ne,ne,sw,sw')).toEqual({x: 0, y: 0})
  expect(hexGridWalker('ne,ne,s,s')).toEqual({x: 4, y: -2})
  expect(hexGridWalker('se,sw,se,sw,sw')).toEqual({x: -2, y: -5})
  expect(hexGridWalker(readSampleData('day11_input.txt'))).toEqual({x: 888, y: -1074})
})

test('day 11 - dist', () => {
  expect(dist({x: 888, y: -1074})).toEqual(759)
  // moving diagonally x reduces by 2 and y by 1. First reduce x to zero, (which means 444 steps), now y is reduced by 444,
  // and moving vertically reduces y by 2 as well (so we take the remaining steps (1074 - 444) / 2)
})
