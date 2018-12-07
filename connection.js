var mysql = require('mysql');
//var app = express();

var connection = mysql.createConnection({
    host: 'mydb.ics.purdue.edu',
    user: 'park862',
    password: 'sqlpark862',
    database: 'park862'
});
connection.connect();
