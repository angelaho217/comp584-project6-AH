// load the http and fs modules to create an HTTP server and read files
const http = require("http");
const fs = require("fs");

// read the port number and file path from the command line arguments
const port = Number(process.argv[2]);
const filePath = process.argv[3];

// create an HTTP server that streams the specified file to the client
const server = http.createServer(function (request, response) {
  // Stream the file directly into the HTTP response.
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(response);
});

// start the server and listen on the specified port
server.listen(port);