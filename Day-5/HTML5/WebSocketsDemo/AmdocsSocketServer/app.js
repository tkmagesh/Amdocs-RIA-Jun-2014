var websocket = require("nodejs-websocket");

var server = websocket.createServer(function(con){
	console.log("A new connection is established");
	var tmr;
	con.on("text",function(data){
		
		console.log(data === "stop");
		if (data === "time"){
			tmr = setInterval(function(){
				con.sendText(new Date().toString());
				console.log(tmr);
			},5000);
			
		}
		if (data === "stop"){
			console.log(tmr);
			clearInterval(tmr);
		}
		console.log("message from client - ", data);
		//con.sendText("Acknowledgement - Message received at " + new Date().toString());
	});
}).listen(9090);
console.log("Socket server listening on port 9090...");