var http = require('http');
const express = require('express');
var httpServer = http.createServer(function(response, request){
    response.writeHead(200,{"Content-Type": "text/plain"});
    response.write("Hello TCSer");
    response.end();
}).listen(8888);