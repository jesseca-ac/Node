const http = require('http');

// create server object
http.createServer((req, res) => {
  // write a response
  res.write('Hello World');
  res.end();
}).listen(3000, () => console.log('Server running...'));

// the most simple server ever