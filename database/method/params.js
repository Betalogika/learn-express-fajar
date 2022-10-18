const express = require('express')
const app = express.Router()
const db = require('../mysql')

app.use(express.urlencoded({ extended : true }))
app.use(express.json())

// post method
app.post('/post/:nama/:nim/:jurusan/:kelas', (req,res,next) =>{
    var nama = req.params.nama
    var nim = req.params.nim
    var jurusan = req.params.jurusan
    var kelas = req.params.kelas
    var sql = `INSERT INTO dataku (nama,nim,jurusan,kelas) VALUES ("${nama}","${nim}","${jurusan}","${kelas}")`
    db.query(sql, (err,results) =>{
        if(err) throw err
        res.json({"note" : "dah teruplod (berdasarkan params)"})
    })
})

module.exports = app