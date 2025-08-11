const mySql = require('mysql2');
const config = require('./config.json');

const con = mySql.createConnection(config.development);
con.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected");
});

module.exports = con;