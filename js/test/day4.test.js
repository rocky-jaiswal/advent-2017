const { toArr, isValid, passphrase, isValidWithoutAnagrams } = require('../lib/day4')
const FS = require('fs')

test('day 4 - isValid sample', () => {
  expect(isValid(toArr('aa bb cc dd ee'))).toEqual(true)
  expect(isValid(toArr('aa bb cc dd aa'))).toEqual(false)
  expect(isValid(toArr('aa bb cc dd aaa'))).toEqual(true)
})

test('isValid', () => {
  expect(isValid(['kvvfl', 'kvvfl', 'olud', 'wjqsqa', 'olud', 'frc'])).toBe(false)
})

test('isValid - anagram', () => {
  expect(isValidWithoutAnagrams(['abcde', 'xxrr', 'ecabd'])).toBe(false)
})

test('day 4 - sample', () => {
  const input = `aa bb cc dd ee
aa bb cc dd aa
aa bb cc dd aaa`
  expect(passphrase(input)).toEqual(2)
})

test('day 4 - main', () => {
  const input = readSampleData()
  expect(passphrase(input)).toEqual(337)
})

const readSampleData = (filename = 'day4_input.txt') => {
  return FS.readFileSync(`${__dirname}/${filename}`).toString()
}
