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

  .action((firstConfigPath, secondConfigPath) => {
    const diff = genDiff(firstConfigPath, secondConfigPath, program.opts().format)
    console.log(diff)
  })
program.parse(process.argv)
