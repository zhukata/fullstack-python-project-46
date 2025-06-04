import path from 'path'
import fs from 'fs'
import process from 'process'

const parse = (filepath) => {
    const normPath = normilizePath(filepath)
    const data = fs.readFileSync(normPath)
    if (filepath.endsWith('.json')) {
        return JSON.parse(data)
    }
}

const normilizePath = (filepath) => {
    const dir = process.cwd()
    console.log(dir)
    if (filepath.startsWith(dir)) {
        return filepath
    } else {
        return path.resolve(dir, filepath)
    }
}

// console.log(parse('file1.json'))

export default parse