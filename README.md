# ya-promisify
Yet another promisify module. This node module offers a function to easily convert callback based async functions into promises.

## Installation
Just add `simple-promisify` as dependency:
```bash
npm install --save simple-promisify
```
## Usage
Usage is quite straighforward:
```js
const promisify = require('simple-promisify'),
      fs = require('fs'),
      //without specify execution context
      stat = promisify(fs.stat),
      //specifying execution context
      readdir = promisify(fs.readdir, fs)

//now, we can use fs.stat with promise API:
stat('some-dir')
    .then( fileStat => fileStat.isDirectory() ? readdir('some-dir') : Promise.reject('Not a dir') )
    .then( files => console.log(`The folder contains the following files: ${files.join(', ')}`))
    .catch( error => console.error('Something is wrong with the path', error) )
```
