const express = require('express')
const app = express.Router()
const db = require('../mysql')

// app.use(express.urlencoded({extended : true}))
// app.use(express.json())

app.get('/lulus', (req, res, next)=>{
    var sql = "SELECT * FROM lulus"
    db.query(sql, (err, results)=>{
        if(err) throw err
        res.status(200).json({
            memuat : "data mahasiswa yang lulus wisuda",
            data : results
        })
    })
})



module.exports = app