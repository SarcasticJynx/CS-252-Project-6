var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'mydb.ics.purdue.edu',
    user: 'park862',
    password: 'sqlpark862',
    database: 'park862'
});
connection.connect();

app.post('budgeteering', function(req, res, next){
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
