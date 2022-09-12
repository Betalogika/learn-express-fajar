const express = require('express')
const app = express.Router()

app.get('/', (req, res) =>{
	res.send({"password" : "12345678"})
})

module.exports = app