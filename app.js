const express = require('express')
const app = express()

app.use (express.json())
app.use (express.urlencoded({
  extended: true

}))


//get
app.get('/', function (req, res) {
  res.send('Selamat Datang di API')
})

//query
app.get('/data-mahasiswa-query', function (req, res) {
  res.json({
    npm : req.query.npm,
    nama : req.query.nama,
    alamat : req.query.alamat

  })
})

//post
app.post('/data-mahasiswa/:hp-query', function (req, res) {
  res.json({
    nama            : req.body.nama,
    alamat          : req.body.alamat,
    tempat_lahir    : req.body.tempat_lahir,
    hobi            : req.params.hobi,
    no_hp           : req.query.no_hp,
    tanggal_lahir   : req.body.tempat_lahir,
    agama           : req.body.agama,
    jenis_kelamin   : req.body.jenis_kelamin,
    umur            : req.body.umur,
    kewarganegaraan : req.body.kewarganegaraan

  })
})

app.listen(3000)