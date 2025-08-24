const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello world from server");
}); // server create hogya hai.

server.listen(3000, () => {
  console.log("server is running on port 3000");
});

//Servers are programed to fulfill users request.
