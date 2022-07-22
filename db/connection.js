const mysql = require('mysql2');

require('dotenv').config();

//CONNECTS to mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        //Your MySQL username,
        user: 'root',
        //Your MYSQL password
        password: process.env.DB_PASSWORD,
        database: 'workplace'
    },
    console.log('Connected to the workplace database.')
);


module.exports = db;