const express = require('express')
const app = express()
const port = 1080

const dataku = require('./method/crud')
const params = require('./method/params')
const wisuda = require('./selesai/wisuda')

app.use('/', dataku)
app.use('/', params)
app.use('/', wisuda)

//  jika eror
app.use((req, res, next)=>{
    const error = new Error('tidak ditemukan')   
    error.status = 404
    res.json({error :{
        status :error.status,
        pesan : error.message
    }
    })
})

//app listen
app.listen(port,() =>{
    console.log(`port ${port} siap`)
})