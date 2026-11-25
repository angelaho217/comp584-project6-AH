// load the module that filters files by extension
const filterFiles = require("./mymodule.js");

// get the directory and extension from the command line arguments
const directory = process.argv[2];
const extension = process.argv[3];

// ask the module to filter the files in the directory by the given extension
filterFiles(directory, extension, function (err, files) {
  // if there was an error reading the directory, log it and exit
  if (err) {
    console.error("Could not read the directory:", err.message);
    return;
  }

  // print each filtered filename to the console]
  files.forEach(function (file) {
    console.log(file);
  });
});