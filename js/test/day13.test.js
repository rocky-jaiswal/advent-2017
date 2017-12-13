const { buildData, firewall } = require('../lib/day13')
const { readSampleData } = require('../lib/utils')

test('day 13 - sample', () => {
  const sample = {
    0: { arr: [0, 0, 0], direction: 'd' },
    1: { arr: [0, 0], direction: 'd' },
    2: { arr: [], direction: 'd' },
    3: { arr: [], direction: 'd' },
    4: { arr: [0, 0, 0, 0], direction: 'd' },
    5: { arr: [], direction: 'd' },
    6: { arr: [0, 0, 0, 0], direction: 'd' }
  }
  expect(buildData(`0: 3
1: 2
4: 4
6: 4`
  )).toEqual(sample)
})

test('day 13 - sample', () => {
  expect(firewall(`0: 3
1: 2
4: 4
6: 4`
  )).toEqual(24)
})

test('day 13 - main', () => {
  expect(firewall(readSampleData('day13_input.txt'))).toEqual(1640)
})
