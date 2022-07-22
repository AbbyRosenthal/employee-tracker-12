const mysql = require('mysql2');

//CONNECTS to mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username,
        user: 'root',
        //Your MYSQL password
        password: 'RenRosenthal28',
        database: 'workplace'
    },
    console.log('Connected to the workplace database.')
);


module.exports = db;