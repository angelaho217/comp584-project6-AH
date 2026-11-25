// load the built-in http module to make HTTP requests
const http = require("http");

// get the URL from the command line arguments
const url = process.argv[2];

// send an HTTP GET request to the specified URL
http.get(url, function (response) {
  // convert the response data to a string
  response.setEncoding("utf8");

  // print the response data to the console as it is received
  response.on("data", function (chunk) {
    console.log(chunk);
  });

  // report any errors that occur during the request
  response.on("error", function (err) {
    console.error("Request failed:", err.message);
  });
});