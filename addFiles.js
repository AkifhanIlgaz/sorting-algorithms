const fs = require("fs");

function addFiles(dirName, fileName) {
  fs.mkdirSync(dirName);
  fs.writeFileSync(`${dirName}/${fileName}.ts`, "");
  fs.writeFileSync(`${dirName}/${fileName}.js`, "");
  fs.writeFileSync(`${dirName}/${fileName}.py`, "");
  fs.writeFileSync(`${dirName}/${fileName}.go`, "");
}
