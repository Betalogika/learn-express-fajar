const express = require('express')
const app = express.Router()

const pass = require('../password/budi.js')
app.use('/password', pass)
app.get('/', (req, res) =>{
	res.send({"email" : "budisSambo123@gmail.coom"})
})

module.exports = app
