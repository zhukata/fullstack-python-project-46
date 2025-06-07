import path from 'path'
import fs from 'fs'
import process from 'process'
import yaml from 'js-yaml'

const parse = (filepath) => {
  const normPath = normilizePath(filepath)
  const data = fs.readFileSync(normPath)
  if (filepath.endsWith('.json')) {
    return JSON.parse(data)
  }
  if (filepath.endsWith('.yaml') || filepath.endsWith('.yml')) {
    return yaml.load(data)
  }
}

const normilizePath = (filepath) => {
  const dir = process.cwd()
  if (filepath.startsWith(dir)) {
    return filepath
  }
  else {
    return path.resolve(dir, filepath)
  }
}

export default parse
