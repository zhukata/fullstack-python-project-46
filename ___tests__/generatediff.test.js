import genDiff from '../src/generatediff.js'
import path from 'path'
import fs from 'fs'

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

const expectedData = readFile('expected.txt')

const filejson1 = getFixturePath('file1.json')
const filejson2 = getFixturePath('file2.json')
const fileyaml1 = getFixturePath('file.yaml')
const fileyml2 = getFixturePath('file.yml')

test('genDiff', () => {
  expect(genDiff(filejson1, filejson2)).toEqual(expectedData)
  expect(genDiff(fileyaml1, fileyml2)).toEqual(expectedData)
})
