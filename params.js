const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({"message" : "Hello World!"})
})

app.get('/nama/:Nama/nim/:NIM/jurusan/:Jurusan/kelas/:kelas', (req, res) => {
  res.send(req.params)
})

app.listen(3000, () => {
  console.log('berjalan pada port ' + port)
})
