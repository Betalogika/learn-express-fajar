const mysql = require('mysql')

const penghubung = mysql.createConnection({
    host : 'localhost',
    username :'root',
    password : '@Rainbow16',
    database : 'mahasiswa'
})

penghubung.connect((err)=>{
    if(err) throw err
    console.log('haha berhasil')
})

module.exports = penghubung