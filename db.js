
const mysql = require('mysql2');

const db = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'mysql@1234',
  database: 'expensetracker'
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('DB connection failed:', err);
    return;
  }
  console.log('Connected to MySQL via Pool');
  connection.release();
});

module.exports = db;
