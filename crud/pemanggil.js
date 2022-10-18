const express = require('express')
const app = express.Router()

app.get('/', (req,res,next)=>{
    res.status(200).json({
        catatan : 'metode get mahasiswa'
    })
})

app.post('/', (req,res,next)=>{
    res.status(200).json({
        catatan : 'metode post mahasiswa'
    })
})

module.exports = app