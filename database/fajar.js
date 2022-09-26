const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 1080

app.use(express.urlencoded({ extended : true }))
app.use(express.json())

// koneksi database
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password :'@Rainbow16',
    database : 'database_pertama'
})

//endpoint

app.get('/dataku',(req,res) =>{
    let sql = "SELECT * FROM dataku"
    db.query(sql, (err,results) =>{
        if(err) throw err
        res.json({results})
    })
})

//app listen
app.listen(port,() =>{
    console.log(`port ${port} siap`)
})