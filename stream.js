/*
A stream is an abstract interface for working with streaming data in Node.js. 
The stream module provides a base API that makes it easy to build objects 
that implement the stream interface.
*/
var fs  = require('fs');

var readableStream = fs.createReadStream('data_file.txt');
var writeableStream = fs.createWriteStream('data_file_out.txt');
readableStream.pipe(writeableStream);

// using streams and log the sizes/length of chunks of data read to the console.
var dataLength = 0;
readableStream.on('data', function (chunk) {
    dataLength += chunk.length;
}).on('end', function(){
    console.log('The length was: ', dataLength)
});

/*  A better example showing the strengths of file streams can be seen here, 
    in an Express route that handles a file request:
*/

//var fs = require('fs');  
var path = require('path');  
var http = require('http');

var staticBasePath = './static';

var staticServe = function(req, res) {  
    var fileLoc = path.resolve(staticBasePath);
    fileLoc = path.join(fileLoc, req.url);

        var stream = fs.createReadStream(fileLoc);

        stream.on('error', function(error) {
            res.writeHead(404, 'Not Found');
            res.end();
        });

        stream.pipe(res);
};

var httpServer = http.createServer(staticServe);  
httpServer.listen(8080);