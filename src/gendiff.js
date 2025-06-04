import { Command } from 'commander';

import { argv } from 'process';
import genDiff from './generatediff.js';

const program = new Command;

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'display help for command')

  .option('-f, --format [type]', 'output format')

  .argument('<filepath1>')
  .argument('<filepath2>')

  .action((filepath1, filepath2) => console.log(genDiff(filepath1, filepath2)))

program.parse(process.argv);