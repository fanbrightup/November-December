var fs = require('fs');
// fs.createReadStream(process.argv[3]).pipe(fs.createWriteStream('out.txt'));
fs.createReadStream(process.argv[2]).pipe(process.stdout);
