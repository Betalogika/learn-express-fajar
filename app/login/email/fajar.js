const express = require('express')
const app = express.Router()

const pass = require('../password/fajar.js')
app.use('/password', pass)
app.get('/', (req, res) =>{
	res.send({"email" : "fajaralam@gmail.com"})
})

module.exports = app
