const http = require('http');
const path = require('path');
const fs = require('fs');



const server = http.createServer((req, res) => {
  // build file path
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  
  // extension of file
  let extname = path.extname(filePath);

  // initial content
  let contentType = 'text/html';

  // check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Check if contentType is text/html but no .html file extension
  if (contentType == "text/html" && extname == "") filePath += ".html";


  // read file
  fs.readFile(filePath, (err, content) => {
    if(err) {
      if(err.code == 'ENOENT') {
        // page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf8');
        })
      } else {
        // some server error
        res.writeHead(500);
        res.end(`Error: ${err.code}`);
      }
    } else {
      // success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });

});


// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//       if(err) throw err;
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(content);
//     })
//   }

//   if (req.url === '/about') {
//     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
//       if(err) throw err;
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(content);
//     })
//   }

//   if (req.url === '/users') {
//     fs.readFile(path.join(__dirname, 'public', 'users.json'), (err, content) => {
//       if(err) throw err;
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(content);
//     })
//   }
// });

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));