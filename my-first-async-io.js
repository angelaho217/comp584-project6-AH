// load the fs module to read files
const fs = require("fs");

// read file asynchronously; the callback runs when reading is finished
fs.readFile(process.argv[2], "utf8", function (err, contents) {
  // stop if an error occurred
  if (err) {
    console.error(err);
    return;
  }

  // split file contents by newline character and count the number of resulting elements
  // subtract 1 to get the number of newline characters.
  const newlineCount = contents.split("\n").length - 1;

  // print the count after file has been read
  console.log(newlineCount);
});