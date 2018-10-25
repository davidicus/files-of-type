# File-of-type [![Build Status](https://travis-ci.org/davidicus/files-of-type.svg?branch=master)](https://travis-ci.org/davidicus/files-of-type)

A small utility that grabs and returns a promise that resolves to an array of all the file names of a specific type located in specified directory. Returns an empty array if no files were found.

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
