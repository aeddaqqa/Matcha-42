const mysql = require('mysql');
const fs = require("fs")
const path = require("path");


const con = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'test',
})

const db = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'test',
	database: 'matcha',
	multipleStatements: true
})

con.connect(function(err){
	if(err) {
		throw err
	} else {
		con.query("CREATE DATABASE IF NOT EXISTS matcha",  (err, result)  => {
			if (err)
				throw err
			else {
				sql = fs.readFileSync(path.join(__dirname, 'sql/create_tables.sql')).toString()
				db.query(sql , (err, result)  => {
					if (err)
						throw err
				})
			}
			
		})
		
	}
})

module.exports = db;