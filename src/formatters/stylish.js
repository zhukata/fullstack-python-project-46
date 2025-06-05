import _ from 'lodash'

const stylish = (diff, depth = 1, spacesCount = 4) => {
  const deepIndentSize = depth * spacesCount // Отступ зависит от глубины
  const leftShift = ' '.repeat(deepIndentSize - 2) // Смещение для `+`, `-`
  const currentIndent = ' '.repeat((spacesCount * depth) - spacesCount) // Закрытие `{}`

  const lines = diff.map(({ key, type, value, oldValue, newValue, children }) => {
    switch (type) {
      case 'nested':
        return `${leftShift}  ${key}: ${stylish(children, depth + 1, spacesCount)}`
      case 'added':
        return `${leftShift}+ ${key}: ${toString(value, depth + 1, spacesCount)}`
      case 'removed':
        return `${leftShift}- ${key}: ${toString(value, depth + 1, spacesCount)}`
      case 'changed':
        return `${leftShift}- ${key}: ${toString(oldValue, depth + 1, spacesCount)}\n${leftShift}+ ${key}: ${toString(newValue, depth + 1, spacesCount)}`
      case 'unchanged':
        return `${leftShift}  ${key}: ${toString(value, depth + 1, spacesCount)}`
      default:
        return ''
    }
  })

  return `{\n${lines.join('\n')}\n${currentIndent}}`
}

const toString = (value, depth, spacesCount) => {
  const deepIndentSize = depth * spacesCount
  const deepIndent = ' '.repeat(deepIndentSize)
  const currentIndent = ' '.repeat((spacesCount * depth) - spacesCount)

  if (_.isObject(value)) {
    const entries = Object.entries(value)
      .map(([key, val]) => `${deepIndent}${key}: ${toString(val, depth + 1, spacesCount)}`)
      .join('\n')
    return `{\n${entries}\n${currentIndent}}`
  }

  if (value === true || value === false) return String(value).toLowerCase()
  if (value === null) return 'null'

  return value
}

export default stylish
