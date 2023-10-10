const fs = require('fs');
const path = require('path');

// how to create folder, mkdir is async by default, use mkdirSync for the sync version
fs.mkdir(path.join(__dirname, 'test'), {}, err => {
  if(err) throw err;
  console.log('Folder created');
});

// create files
// fs.open()

// create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', err => {
  if(err) throw err;
  console.log('File created');

  // append to and existing file
  fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I am Jesseca', err => {
    if(err) throw err;
    console.log('File created');
  });
});


// read files
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if(err) throw err;
  console.log(data);
});

// rename files
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello_world.txt'), (err) => {
  if(err) throw err;
  console.log('File renamed');
});