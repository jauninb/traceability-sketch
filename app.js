var http = require('http');

// Change the port number according to issue #
var port = (process.env.PORT || process.env.VCAP_APP_PORT || 7777);

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	// Doing some cleanup - refactoring
	var message = 'Hello World!\n';
	res.end(message);
}).listen(port);

