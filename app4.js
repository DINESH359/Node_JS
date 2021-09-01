var http = require('http')

var fs = require('fs')

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/index3.html', 'utf-8')
    var msg = 'I am the template message';
    html = html.replace('{message}', msg)
    res.end(html);

}).listen(1337, '127.0.0.1');