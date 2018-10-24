/*
* Test for the module
*
*/

const filesOfType = require("./../index");

test("Get all files of type .js in this directory", () => {
  return filesOfType(".js", "./__test__/").then(files => {
    expect(files).toContain("index.test.js");
  });
});

test("Get all files of type .yml in root directory", () => {
  return filesOfType(".yml").then(files => {
    expect(files).toContain(".travis.yml");
  });
});
