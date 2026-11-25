// load the http module to create an HTTP server
const http = require("http");

// get the port number from the command line arguments
const port = Number(process.argv[2]);

// create an HTTP server that responds with JSON data based on the request URL
const server = http.createServer(function (request, response) {
  // Parse the request URL so we can check its path and query string.
  const requestUrl = new URL(request.url, "http://localhost");
  const isoTime = requestUrl.searchParams.get("iso");
  const date = new Date(isoTime);

  // choose the response based on the request path
  let result;

  if (requestUrl.pathname === "/api/parsetime") {
    // return an object with hour, minute, and second properties
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  } else if (requestUrl.pathname === "/api/unixtime") {
    // return an object with a unixtime property
    result = {
      unixtime: date.getTime()
    };
  } else {
    // return a 404 status code for any other request path
    response.writeHead(404);
    response.end();
    return;
  }

  // send the JSON response with a 200 status code and the appropriate content type
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(result));
});

// start the server and listen on the specified port
server.listen(port);