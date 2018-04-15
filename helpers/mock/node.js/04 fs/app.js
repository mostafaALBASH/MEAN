var fs = require('fs');

fs.readFile('txtfile.txt', 'utf8', function(err, data){
fs.writeFile('written.txt', data);
});

/*var readMe = fs.readFileSync('txtfile.txt', 'utf8');


fs.writeFileSync('written.txt', readMe);
console.log(readMe);*/