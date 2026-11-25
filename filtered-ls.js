// load the fs module to read files
const fs = require("fs");

// load the path module to work with file paths
const path = require("path");

// the directory and extension are the first two arguments after the script name
const directory = process.argv[2];
const extension = "." + process.argv[3];

// read the directory asynchronously; the callback runs when reading is finished
fs.readdir(directory, function (err, files) {
  // stop if an error occurred
  if (err) {
    console.error(err);
    return;
  }

  // check each file in the directory to see if it has the specified extension
  files.forEach(function (file) {
    if (path.extname(file) === extension) {
      console.log(file);
    }
  });
});