var http = require('http');
var url = require('url');
var fs = require('fs');
//var mysql = require('mysql');
//var express = require('express');
//var app = express();
var port = process.env.port || 1337;

app.get('/', function (req, res) {
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'jrapsins',
        password: 'JavascriptProject1',
        server: 'mydb.ics.purdue.edu', 
        database: 'jrapsins' 
    };

    // connect to your database
    sql.connect(config, function (err) {
        if (err) console.log(err);
    });
});

//connection.connect(function(err){
  //if(err) throw err;
  //console.log("SQL Database connected");
//});

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
