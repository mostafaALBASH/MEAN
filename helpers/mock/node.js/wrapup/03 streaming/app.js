var fs = require('fs');

var myStream = fs.createReadStream('./textFile.txt', 'utf-8');
var writtenVar = fs.createWriteStream('./written.txt');

myStream.on('data', function(a){
console.log('there is a chunck of data');
console.log(a);
writtenVar.write(a);
});