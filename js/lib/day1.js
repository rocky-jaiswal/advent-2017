const captcha = (num) => {
  const arr = num.split('').map((e) => parseInt(e))
  return arr.reduce((a, e, i) => {
    const idx = i + 1 === arr.length ? 0 : i + 1
    if (arr[idx] === e) {
      return a + e
    }
    return a
  }, 0)
}

module.exports = captcha
