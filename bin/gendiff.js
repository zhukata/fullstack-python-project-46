#!/usr/bin/env node
import { Command } from 'commander'

import genDiff from '../src/index.js'

const program = new Command()

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'display help for command')

  .option('-f, --format [type]', 'output format', 'stylish')

  .argument('<filepath1>')
  .argument('<filepath2>')

  .action((filepath1, filepath2) => {
    if (!filepath1 || !filepath2) {
      console.error('Error: You must provide two file paths.')
      process.exit(1)
    }
    try {
      console.log(genDiff(filepath1, filepath2, program.opts().format))
      process.exit(0)
    }
    catch (error) {
      console.error(`Error: ${error.message}`)
      process.exit(1)
    }
  })
program.parse(process.argv)
