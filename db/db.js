const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node1'
});

connection.connect((err) => {
    if (err) {
        console.error('error al conectar con db', err) 
        return
    }
    console.log('Connected to database');
});

module.exports = connection;