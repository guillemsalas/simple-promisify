# simple promisify
This node module offers a function to easily convert callback based async functions into promises.

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
      stat = promisify(fs.stat)

//now, we can use fs.stat with promise API:
stat('some-file.txt')
    .then( fileStat => console.log(`Size of the file: ${fileStat.stat}`) )
    .catch( error => console.error('Something is wrong with the path', error) )
```
