const spiral = (num) => {
  let dist = 1
  let direction = 'RIGHT'
  const path = [{ x: 0, y: 0 }]

  const canGoRight = (p) => {
    if (p.x < dist) {
      return true
    } else {
      direction = 'UP'
      return false
    }
  }

  const canGoUp = (p) => {
    if (p.y < dist) {
      return true
    } else {
      direction = 'LEFT'
      return false
    }
  }

  const canGoLeft = (p) => {
    if (p.x > -1 * dist) {
      return true
    } else {
      direction = 'DOWN'
      return false
    }
  }

  const canGoDown = (p) => {
    if (p.y > -1 * dist) {
      return true
    } else {
      direction = 'RIGHT'
      return false
    }
  }

  // const isNotOccupied = (p) => {
  //   return path.find((pth) => pth.x === p.x && pth.y === p.y) === undefined
  // }

  const nums = Array(num).fill(null).map((_, i) => i + 2)

  const withPath = nums.map((n, idx) => {
    if (canGoRight(path[idx]) && direction === 'RIGHT') {
      direction = 'RIGHT'
      path.push({ x: path[idx].x + 1, y: path[idx].y + 0 })
      return { n, x: path[idx].x + 1, y: path[idx].y + 0 }
    }

    if (canGoUp(path[idx]) && direction === 'UP') {
      direction = 'UP'
      path.push({ x: path[idx].x + 0, y: path[idx].y + 1 })
      return { n, x: path[idx].x + 0, y: path[idx].y + 1 }
    }

    if (canGoLeft(path[idx]) && direction === 'LEFT') {
      direction = 'LEFT'
      path.push({ x: path[idx].x - 1, y: path[idx].y + 0 })
      return { n, x: path[idx].x - 1, y: path[idx].y + 0 }
    }

    if (canGoDown(path[idx]) && direction === 'DOWN') {
      direction = 'DOWN'
      path.push({ x: path[idx].x + 0, y: path[idx].y - 1 })
      return { n, x: path[idx].x + 0, y: path[idx].y - 1 }
    }

    direction = 'RIGHT'
    dist = dist + 1
    path.push({ x: path[idx].x + 1, y: path[idx].y + 0 })
    return { n, x: path[idx].x + 1, y: path[idx].y + 0 }
  })

  // console.log(withPath)
  const wp = withPath.find((x) => x.n === num)
  return Math.abs(wp.x) + Math.abs(wp.y)
}

module.exports = {
  spiral
}
