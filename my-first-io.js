// load the fs module to read files
const fs = require("fs");

// read file path provided as the first argument
// "utf8" tells node to return  file contents as text
const contents = fs.readFileSync(process.argv[2], "utf8");

// split file contents by newline character and count the number of resulting elements
const newlineCount = contents.split("\n").length - 1;

// print number of newline characters
console.log(newlineCount);