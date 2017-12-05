const { readSampleData } = require('../lib/utils')

const solveMaze = (maze) => {
  // the "state" of the solution
  let step = -1
  let position = 0
  const visited = []

  while (position < maze.length) {
    position = position + maze[position]
    maze = maze.map((e, i) => visited[0] === i ? e + 1 : e)
    visited[0] = position
    step = step + 1

    // console.log('-->' + step)
    // console.log(visited)
    // console.log(maze)
  }

  return step
}

const prepareInput = (filename) => {
  const contents = readSampleData('day5_input.txt')
    .split('\n')
    .map((e) => e.trim())
    .map((e) => parseInt(e))
  contents.pop()
  return contents
}

module.exports = {
  solveMaze,
  prepareInput
}
