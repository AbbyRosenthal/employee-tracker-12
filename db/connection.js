const mysql = require('mysql2');

require('dotenv').config();

//CONNECTS to mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username,
        user: process.env.DB_USER,
        //Your MYSQL password
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log('Connected to the workplace database.')
);


module.exports = db;