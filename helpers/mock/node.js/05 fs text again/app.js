var fs = require('fs');

var readMe = fs.readFileSync('file.txt', 'utf-8');


fs.writeFileSync('written.txt', readMe);
console.log(readMe);