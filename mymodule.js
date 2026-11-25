// load the built-in file system module so we can read directories
const fs = require("fs");

// export a function that filters files by extension
module.exports = function (directory, extension, callback) {
  // read the directory asynchronously
  fs.readdir(directory, function (err, files) {
    // pass any error to the callback and return early if there was a problem reading the directory
    if (err) {
      return callback(err);
    }

    // keep only the files that end with the given extension
    const filteredFiles = files.filter(function (file) {
      return file.endsWith("." + extension);
    });

    // pass the filtered files to the callback
    callback(null, filteredFiles);
  });
};