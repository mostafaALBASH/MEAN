var fs = require('fs');

var read = fs.readFileSync('read.txt', 'utf-8');
fs.writeFileSync('writtenInIt.txt', read);


fs.writeFileSync('write2.txt', fs.readFileSync('read.txt', 'utf-8'));