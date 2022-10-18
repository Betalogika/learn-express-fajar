const mysql = require('mysql')

// create Connection
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "@Rainbow16",
    database : "database_pertama"
})

db.connect(function(err){
    if (err) throw err
    console.log('Terhibungmi ke databasenya...')
})

module.exports = db