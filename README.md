### Hexlet tests and linter status:
[![Actions Status](https://github.com/zhukata/fullstack-python-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/zhukata/fullstack-python-project-46/actions)

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=zhukata_fullstack-python-project-46&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=zhukata_fullstack-python-project-46)

# Gendiff

A CLI application that compares two configuration files, then computes a difference between them and shows it in the terminal, similar to `git diff` command.

## How to install

To install gendiff on your computer, you should:

1. Download or clone this repository
2. Open a terminal window in the project folder and run:

```
npm link
```

This will install Gendiff as a global npm package you can run in a terminal window.

## How to use

Gendiff supports json, yaml and ini file formats. To generate the difference between two files, you need to go to your terminal window and type in:

```
gendiff file1.json file2.json
```

Note that Gendiff accepts both relative and absolute paths. By default Gendiff will output the difference in a tree-like format. You can change the output format providing an optional --format option with a specific format name:

```
gendiff --format tree file1.ini file2.ini
gendiff --format plain file1.json file2.json
gendiff --format json file1.yml file2.yml
```

Nothing prevents you from comparing two files of different formats, like this:

```
gendiff file1.yml file2.json
gendiff file1.ini file2.yaml
```

To access gendiff help, run this:

```
gendiff --help
```