const express = require('express')
const app = express.Router()

app.get('/ferdi', (req,res) =>{
	res.send({"nilai Ferdi" : 90})
})
app.get('/budi', (req,res) =>{
	res.send({"nilai Budi" : 20})
})

module.exports = app