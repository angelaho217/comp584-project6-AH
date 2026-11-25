// load the net module to create a TCP server
const net = require("net");

// add a helper function to format numbers as two digits
function twoDigits(number) {
  return String(number).padStart(2, "0");
}

// create a TCP server that listens for connections and sends the current date and time in the required format
const server = net.createServer(function (socket) {
  const date = new Date();

  // build the timestamp string in the format "YYYY-MM-DD hh:mm\n"
  const timestamp =
    date.getFullYear() +
    "-" +
    twoDigits(date.getMonth() + 1) +
    "-" +
    twoDigits(date.getDate()) +
    " " +
    twoDigits(date.getHours()) +
    ":" +
    twoDigits(date.getMinutes()) +
    "\n";

  // send the timestamp to the client and close the connection
  socket.end(timestamp);
});

// listen on the port specified as the first command-line argument
const port = Number(process.argv[2]);
server.listen(port);