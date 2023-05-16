// It should be assigned to the variable app and this one must be exported
// HTTP server should listen on port 1245
// Displays Hello Holberton School! in the page body for any endpoint as plain text

const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;
const message = 'Hello Holberton School!\n';
const serverNotice = `server is running at http://${hostname}:${port}/`;
const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end(message);
});

app.listen(port, hostname, () => {
  console.log(serverNotice);
});

module.exports = app;
