// load the http module to create an HTTP client
const http = require("http");

// get the URLs from the command line arguments
const urls = process.argv.slice(2, 5);

// store the complete responses in an array, and keep track of how many requests have completed
const results = new Array(urls.length);
let completedRequests = 0;

// request each URL in parallel, and store the complete response in the results array
urls.forEach(function (url, index) {
  http.get(url, function (response) {
    response.setEncoding("utf8");

    let responseText = "";

    // collect each chunk of data as it arrives, and add it to the responseText variable
    response.on("data", function (chunk) {
      responseText += chunk;
    });

    // save the complete response in the results array, and increment the completedRequests counter
    response.on("end", function () {
      results[index] = responseText;
      completedRequests++;

      // print the complete responses in the order they were requested, once all requests have completed
      if (completedRequests === urls.length) {
        results.forEach(function (result) {
          console.log(result);
        });
      }
    });

    // report an error if there is a problem with the response
    response.on("error", function (err) {
      console.error("Response error:", err.message);
    });
  }).on("error", function (err) {
    // report an error if there is a problem with the request itself
    console.error("Request error:", err.message);
  });
});