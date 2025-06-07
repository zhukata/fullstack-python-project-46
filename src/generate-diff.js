import _ from 'lodash'
import parse from './parse.js'
import stylish from './formatters/stylish.js'
import plain from './formatters/plain.js'
import json from './formatters/json.js'

const genDiff = (filepath1, filepath2, formatName) => {
  const diff = getDifferent(parse(filepath1), parse(filepath2))
  switch (formatName) {
    case 'stylish':
      return stylish(diff)
    case 'plain':
      return plain(diff)
    case 'json':
      console.log(JSON.stringify(diff, null, 2))
      return json(diff)
  }
}

const getDifferent = (data1, data2) => {
  const sortedKeys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)))

  return sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return { key, type: 'added', value: data2[key] }
    }
    if (!_.has(data2, key)) {
      return { key, type: 'removed', value: data1[key] }
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, type: 'nested', children: getDifferent(data1[key], data2[key]) }
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return { key, type: 'changed', oldValue: data1[key], newValue: data2[key] }
    }
    return { key, type: 'unchanged', value: data1[key] }
  })
}

export default genDiff
