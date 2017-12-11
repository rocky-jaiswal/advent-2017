const dist = (point) => {
  const x = Math.abs(point.x)
  const y = Math.abs(point.y)

  const diag = x / 2
  return ((y - diag) / 2) + diag
}

const hexGridWalker = (input) => {
  let point = { x: 0, y: 0 }
  let maxDist = 0
  input.split(',').forEach((step) => {
    point = mutator(point, step)
    const xx = dist(point)
    if (xx > maxDist) {
      maxDist = xx
    }
  })
  console.log(maxDist)
  return point
}

const mutator = (point, direction) => {
  if (direction === 'n') {
    return { x: point.x, y: point.y + 2 }
  }
  if (direction === 'ne') {
    return { x: point.x + 2, y: point.y + 1 }
  }
  if (direction === 'nw') {
    return { x: point.x - 2, y: point.y + 1 }
  }
  if (direction === 's') {
    return { x: point.x, y: point.y - 2 }
  }
  if (direction === 'se') {
    return { x: point.x + 2, y: point.y - 1 }
  }
  if (direction === 'sw') {
    return { x: point.x - 2, y: point.y - 1 }
  }
  return point
}

module.exports = {
  hexGridWalker,
  dist
}
