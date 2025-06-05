import _ from 'lodash'

const plain = (diff, path = '') => {
  return diff.map(({ key, type, value, oldValue, newValue, children }) => {
    const propertyPath = path ? `${path}.${key}` : key

    switch (type) {
      case 'added':
        return `Property '${propertyPath}' was added with value: ${toString(value)}`
      case 'removed':
        return `Property '${propertyPath}' was removed`
      case 'changed':
        return `Property '${propertyPath}' was updated. From ${toString(oldValue)} to ${toString(newValue)}`
      case 'nested':
        return plain(children, propertyPath)
      default:
        return ''
    }
  }).filter(Boolean).join('\n')
}

const toString = (value) => {
  if (_.isObject(value)) {
    return '[complex value]'
  }
  return typeof value === 'string' ? `'${value}'` : String(value)
}

export default plain
