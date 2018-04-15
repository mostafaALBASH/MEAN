var fs = require('fs');

var myStream = fs.createReadStream('./readable.txt', 'utf-8');
var written = fs.createWriteStream('./writable.ppt');

myStream.pipe(written);