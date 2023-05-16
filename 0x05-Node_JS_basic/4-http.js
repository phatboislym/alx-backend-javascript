// It should be assigned to the variable app and this one must be exported
// HTTP server should listen on port 1245
// Displays Hello Holberton School! in the page body for any endpoint as plain text

const http = require('http');

const port = 1245;
const message = 'Hello Holberton School!\n';
const serverNotice = `server is running on port ${port}`;
const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end(message);
});

app.on('error', (err) => {
  console.error('Server error:', err.message);
});

app.listen(port, () => {
  console.log(serverNotice);
});

module.exports = app;
