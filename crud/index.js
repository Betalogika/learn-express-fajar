const express = require('express')
const app = express()
const port = 1022
const db = require('./mysql')

app.use(express.urlencoded({ extended : true }))
app.use(express.json())

app.listen(port, ()=>{
    console.log(`port ${port} dah oke...`)
})