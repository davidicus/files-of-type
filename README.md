# File-of-type [![Build Status](https://travis-ci.org/davidicus/files-of-type.svg?branch=master)](https://travis-ci.org/davidicus/files-of-type)

A small utility that grabs and returns a promise that resolves to an array of all the file names of a specific type located in specified directory. Returns an empty array if no files were found.

## Getting Started

```
npm i files-of-type
```

or

```
yarn i files-of-type
```

## Use

```
/**
 * Create an array of filenames of specific type.
 * @param fileType - the file extension you are searching for
 * @param filePath - the path to directory you would like to search. Defaults to __dirname
 * @returns <Promise> which will eventually resolve to an array with either the files names or empty
 */

const filesOfType = require('file-of-type');

filesOfType('.js').
  then(files => {
    files.map(file => console.log(file));
  });
```
