const { readSampleData } = require('./utils')

const parseMax = (filename = 'day8_sample.txt') => {
  const input = readSampleData(filename)

  // Read and initialize all variables
  const allVars = input
    .split('\n')
    .map((line) => line.split(/\s/)[0])
    .filter((e) => e.trim() !== '')
    .reduce((acc, e) => {
      acc[e] = 0
      return acc
    }, {})

  // Now read each instruction one by one
  const instructions = input
    .split('\n')
    .filter((e) => e.trim() !== '')
    .map((line) => {
      return {
        operation: line.split('if')[0].trim(),
        condition: line.split('if')[1].trim()
      }
    })

  const applyCondition = (__var, __cond, __op) => {
    let result = false
    switch (__cond) {
      case '<':
        result = allVars[__var] < __op
        break
      case '<=':
        result = allVars[__var] <= __op
        break
      case '>':
        result = allVars[__var] > __op
        break
      case '>=':
        result = allVars[__var] >= __op
        break
      case '==':
        result = allVars[__var] === __op
        break
      case '!=':
        result = allVars[__var] !== __op
        break
    }
    return result
  }

  let overallMax = []

  // Apply the instructions
  instructions.map((instruction) => {
    const parsedCond = instruction.condition.split(/\s/)
    const _variable = parsedCond[0].trim()
    const _cond = parsedCond[1].trim()
    const _op = parseInt(parsedCond[2].trim())

    if (applyCondition(_variable, _cond, _op)) {
      const parsedIns = instruction.operation.split(/\s/)
      const variable = parsedIns[0].trim()
      const operand = parseInt(parsedIns[2].trim())
      const op = parsedIns[1].trim()
      if (op === 'inc') {
        allVars[variable] = allVars[variable] + operand
      }
      if (op === 'dec') {
        allVars[variable] = allVars[variable] - operand
      }
    }

    overallMax.push(Object.values(allVars).reduce((m, e) => e > m ? e : m))
  })

  console.log('Overall Max - ' + overallMax.reduce((m, e) => e > m ? e : m))

  return Object
    .values(allVars)
    .reduce((m, e) => e > m ? e : m)
}

module.exports = {
  parseMax
}
