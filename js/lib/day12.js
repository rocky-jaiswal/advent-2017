const pipes = (input) => {
  let connected = []
  let visitedSources = []

  const findConnectedNodes = (num, allRecords) => {
    allRecords.forEach((r) => {
      const source = r.split('<->')[0].trim()
      const connections = r.split('<->')[1].split(',').map((c) => c.trim())
      if (source === num && !visitedSources.includes(source)) {
        visitedSources.push(source)
        connected = connected.concat(connections)
        connections.forEach((c) => findConnectedNodes(c, allRecords))
      }
    })
  }

  const records = input
    .split('\n')
    .filter((l) => l.trim().length > 0)

  records.forEach((r) => findConnectedNodes('0', records))

  return Object.keys(connected.reduce((acc, e) => {
    acc[e] = true
    return acc
  }, {})).length
}

module.exports = {
  pipes
}
