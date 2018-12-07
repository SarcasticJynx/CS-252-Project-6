var mysql = require('mysql');
var app = express();
var port = process.env.port || 1337;

var connection = mysql.createConnection({
    //host: 'mydb.ics.purdue.edu',
    host: 'lpvdbamypr04.itap.purdue.edu',
    user: 'park862',
    password: 'sqlpark862',
    database: 'park862'
});
connection.connect(function(err) {
  var sql = "INSERT INTO budgeteering (ID, PW, item) VALUES ('abc', '1234', 'itemA')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

});

app.post('park862', function(req, res, next){
   var cope = req.body.params;
   var query = connection.query('INSERT INTO cope set ?', cope, function(err, result) {
     if (err) {
       console.error(err);
       return res.send(err);
     } else {
       return res.send('Ok');
     }
});
app.listen(port);
