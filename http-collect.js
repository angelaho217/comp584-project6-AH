// load the http module to create an HTTP client.
const http = require("http");

// get the URL from the command line arguments
const url = process.argv[2];

// store the complete response as a string
let responseText = "";

// send an HTTP GET request to the specified URL
http.get(url, function (response) {
  // Make each incoming piece of data a UTF-8 string.
  response.setEncoding("utf8");

  // add each chunk of data to the responseText variable as it arrives
  response.on("data", function (chunk) {
    responseText += chunk;
  });

  // when the response stream ends, print the length of the complete response and the response itself
  response.on("end", function () {
    console.log(responseText.length);
    console.log(responseText);
  });

  // print an error message if there is a problem with the response
  response.on("error", function (err) {
    console.error("Response error:", err.message);
  });
});