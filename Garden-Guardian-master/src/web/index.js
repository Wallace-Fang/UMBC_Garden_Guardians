const express = require('express')
const multer  = require('multer')
const byline = require('byline')
const { exec } = require('child_process')
const fs = require('fs')
const {cppSuffix, cmdTable} = require('./constants')
const app = express()
const upload = multer({ dest: '../images/'}) // form-data middleware

app.get('/', (req, res) => {
    console.log('stream requested')
    let stream = fs.createReadStream('../services/deer.mp4');
    stream = byline.createStream(stream);
    stream.pipe(res);
    // stream.on('end', res.end); // close stream
})

// listen on localhost:8000
app.listen(8000)
