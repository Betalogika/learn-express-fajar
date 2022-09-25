const express = require('express')
const app = express()
const bodyParser = require(body-parser)
const port = 2002

//parse json
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())



app.listen(port, ()=>{
    console.log(`port ${port} dah oke...`)
})