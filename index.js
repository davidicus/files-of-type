"use strict";

const fs = require("fs");
const promisify = require("util").promisify;
const path = require("path");

/**
 * Create an array of filenames of specific type.
 * @param fileType - the file extension you are searching for
 * @param filePath - the path to directory you would like to search. Defaults to __dirname
 * @returns <Promise> which will eventually resolve to an array with either the files names or empty
 */
module.exports = (fileType, filePath = "./", recursive = false) => {
  const match = "([a-zA-Z0-9\\s_\\.\\-():])+(";
  const regEx = new RegExp(match + fileType + ")$", "i");
  const fsReadDir = promisify(fs.readdir);
  const directoryPath = path.resolve(__dirname, filePath);
  return fsReadDir(directoryPath).then(files =>
    files.filter(file => file.match(regEx))
  );
};
