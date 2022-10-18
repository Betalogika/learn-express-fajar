const mysql = require('mysql')

// koneksi database
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password :'@Rainbow16',
    database : 'database_pertama'
})

db.connect(function(err){
    if (err) throw err
    console.log('terhubung di database')
})

module.exports = db