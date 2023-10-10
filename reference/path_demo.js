const path = require('path');

// base file name
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// create path object, shows root, dir, base, ext, name
console.log(path.parse(__filename));
console.log(path.parse(__filename).base); // call on a specifics of the object

// concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));

