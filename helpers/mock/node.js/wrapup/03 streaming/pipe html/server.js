var http = require('http');
var fs = require('fs');



var server = http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
var x = fs.createReadStream(__dirname + '/html.html', 'utf8');
x.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('bla');