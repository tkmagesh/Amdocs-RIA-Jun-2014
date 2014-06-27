var websocket = require("nodejs-websocket");
var server = websocket.createServer(function(con){
	con.on("text",function(data){
		server.connections.forEach(function(c){
			c.sendText(data);
		});
	});
}).listen(9090);
console.log("Socket server listening on port 9090...");