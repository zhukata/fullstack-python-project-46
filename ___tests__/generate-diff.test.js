import genDiff from '../src/generate-diff.js'
import path from 'path'
import fs from 'fs'

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

const expectedStylishData = readFile('expected-stylish.txt')
const expectedPlainData = readFile('expected-plain.txt')
const expectedJsonData = readFile('expected-json.txt')

const filejson1 = getFixturePath('file1.json')
const filejson2 = getFixturePath('file2.json')
const fileyaml1 = getFixturePath('file.yaml')
const fileyml2 = getFixturePath('file.yml')

test('genDiffStylish', () => {
  expect(genDiff(filejson1, filejson2)).toEqual(expectedStylishData)
  expect(genDiff(fileyaml1, fileyml2)).toEqual(expectedStylishData)
})

test('genDiffPlain', () => {
  expect(genDiff(filejson1, filejson2, 'plain')).toEqual(expectedPlainData)
  expect(genDiff(fileyaml1, fileyml2, 'plain')).toEqual(expectedPlainData)
})

test('genDiffJson', () => {
  expect(genDiff(filejson1, filejson2, 'json')).toEqual(expectedJsonData)
  expect(genDiff(fileyaml1, fileyml2, 'json')).toEqual(expectedJsonData)
})
