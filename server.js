var http = require('http');
var url = require('url');
var fs = require('fs');
var mysql = require('mysql');
var port = process.env.port || 1337;
//var app = express();

var connection = mysql.createConnection({
    host: 'mydb.ics.purdue.edu',
    user: 'park862',
    password: 'sqlpark862',
    database: 'park862'
});
connection.connect();



/*app.post('park862', function(req, res, next){
   var cope = req.body.params;
   var query = connection.query('insert into cope set ?', cope, function(err, result) {
     if (err) {
       console.error(err);
       return res.send(err);
     } else {
       return res.send('Ok');
     }
});
app.listen(port); */
    //database info
    //userName: 'jrapsins',
    //password: 'JavascriptProject1',
    //server: 'budgeteering.database.windows.net',
    //options:
    //database: 'budgeteering-data',

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
        
}).listen(port);

//server.listen(2050, '127.0.0.1');
//console.log('listening to port 2050');
