var mysql = require("mysql");
console.log(process.env)
var connection;
if (process.env.JAWSDB_URL) {
    console.log('on heroku!')
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
};
//setting up variables for MySQL connection

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});
// creates connection
module.exports = connection;