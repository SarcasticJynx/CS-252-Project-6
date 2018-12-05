var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response) {

  console.log(request.url);
  var parsedUrl = url.parse(request.url);
  var resource = parsedUrl.pathname;
  console.log('resource path=%s',resource);
 
// response.writeHead(200, {'Content-Type':'text/html'});
//  response.write(Main_Page.html);
//  response.end();

  if(resource == '/' || resource == '/Main-Page.html' ) {
  fs.readFile('Main-Page.html', 'utf-8', function(error, data) {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end(data);
  
      
      });

  } else {
    fs.readFile('404-Error-Page.html', 'utf-8', function(error, data) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(data);
        });
  }
        
});

http.createServer(onRequest).listen(process.env.PORT || 3000);
console.log('Listening for requests on port ' + (process.env.PORT || 3000));
