// load the http and stream modules to create an HTTP server and transform streams
const http = require("http");
const { Transform } = require("stream");

// get the port number from the command line arguments
const port = Number(process.argv[2]);

// create an HTTP server that transforms incoming POST request data to uppercase and sends it back to the client
const server = http.createServer(function (request, response) {
  // This server accepts POST requests only.
  if (request.method !== "POST") {
    response.writeHead(405);
    response.end("Only POST requests are allowed.");
    return;
  }

  // create a transform stream that converts incoming data to uppercase
  const uppercase = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString("utf8").toUpperCase());
    }
  });

  // set the response header to indicate that the response is plain text
  request.pipe(uppercase).pipe(response);
});

// start the server and listen on the specified port
server.listen(port);