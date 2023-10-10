const os = require('os');

// check operating system aka platform
console.log(os.platform());

// cpu architecture
console.log(os.arch());

// infor of each core in cpu
console.log(os.cpus());

// free memory
console.log(os.freemem());

// total memory
console.log(os.totalmem());

// home dir
console.log(os.homedir());

// uptime
console.log(os.uptime());