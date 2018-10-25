# File-of-type

A small utility that grabs and returns an array of all the file names of a specific type located in specified directory.

## Getting Started

```
npm install files-of-type
```

or

```
yarn install files-of-type
```

## Use

```
const filesOfType = require('file-of-type');

filesOfType('.js').
  then(files => {
    files.map(file => console.log(file));
  });
```
