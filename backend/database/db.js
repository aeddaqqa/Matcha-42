const mysql = require('mysql2')
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

module.exports = db