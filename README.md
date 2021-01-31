# Winston Logs
An elegant log formatter for Winston

![version](https://img.shields.io/npm/v/@zakku/winston-logs?style=flat-square)
![dependencies](https://img.shields.io/david/zakuciael/winston-logs?style=flat-square)
![downloads](https://img.shields.io/npm/dt/@zakku/winston-logs?style=flat-square)

## Installation
```bash
yarn add @zakku/winston-logs
# or
npm i @zakku/winston-logs
```

## Options
The formatter has no **real** options and by default it works with **errors, objects and splats**.  
The only way to customize the formatter is to add an **label format** before it, this will append the label into the logs just after the level.

## Examples
![formatter example](https://github.com/zakuciael/winston-logs/raw/main/.github/example.png)