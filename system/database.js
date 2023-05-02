const mysql = require('mysql');
const {config} = require('../settings/config')
//database settings
const connection = mysql.createConnection(config.MySql);

//coonect to database
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//exports 
module.exports = {connection};