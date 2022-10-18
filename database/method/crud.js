const express = require('express')
const app = express.Router()
const db = require('../mysql') // koneksi db

app.use(express.urlencoded({ extended : true }))
app.use(express.json())

app.get('/dataku',(req,res, next) =>{
    var sql = "SELECT * FROM dataku"
    db.query(sql, (err,results) =>{
        if(err) throw err
        res.status(200).json({
            memuat : "data mahasiswa",
            data : results
        })
    })
})

// get dari params
app.get('/dataku/:nim', (req,res, next) =>{
    var nim = req.params.nim
    var sql = "SELECT * FROM dataku WHERE nim ="+nim
    db.query(sql, (err,results) =>{
        if(err) throw err
        res.status(200).json({
            memuat : `data mahasiswa dengan nim : ${nim} ditemukan`,
            data : results
        })
    })
})

//method post
app.post('/post',(req,res,next) =>{
    var nama = req.body.nama
    var nim = req.body.nim
    var jurusan = req.body.jurusan
    var kelas = req.body.kelas
    var sql = `INSERT INTO dataku (nama,nim,jurusan,kelas) VALUES ("${nama}","${nim}","${jurusan}","${kelas}")`
    db.query(sql, (err,results) =>{
        if(err) throw err
        res.json({"note" : "dah teruplod (dari body)"})
    })
})

// put method
app.put('/put/:nim',(req,res,next) =>{
    var nama = req.body.nama
    var nim1 = req.body.nim
    var nim = req.params.nim
    var jurusan = req.body.jurusan
    var kelas = req.body.kelas
    var sql =`UPDATE dataku SET nama = "${nama}", jurusan = "${jurusan}", kelas = "${kelas}", nim = "${nim1}" WHERE nim =`+nim
    db.query(sql, (err,results) =>{
        if(err) throw err
        res.json({"note" : `data dengan nim ${nim} terganti`})
    })
})

// method delete
app.delete('/hapus/:nim', (req, res, next)=>{
    var nim = req.params.nim
    var sql =`DELETE FROM dataku WHERE nim=${nim}`
    db.query(sql, (err,results) =>{
        if(err) throw err
        res.json({"note" : `data dengan nim ${nim} terhapus`})
    })
})

module.exports = app