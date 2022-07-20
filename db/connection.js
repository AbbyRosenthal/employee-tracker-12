const mysql = require('mysql2');

require('dotenv').config();

//CONNECTS to mysql database
const mysql = new Mysql(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });


module.exports = mysql;