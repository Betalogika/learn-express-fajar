const express = require('express')
const app = express.Router()

app.get('/', (req, res) =>{
	res.send({"password" : "budiSambo01"})
})

module.exports = app