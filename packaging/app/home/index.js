const express = require('express')
const app = express()
const port =2022

const emailFajar = require('../login/email/fajar.js')
const emailBudi = require('../login/email/budi.js')
const settingRoute = require('./nilai/mahasiswa.js')


app.use('/emailbudi',emailBudi)
app.use('/emailfajar', emailFajar)
app.use('/nilai', settingRoute)

app.listen(port, ()=>{
	console.log(`listening on port ${port}`)
})