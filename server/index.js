const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 9000
const app = express()

// API
const getStock = require('./api/getStock')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req, res) => {
    res.send("index")
})
app.get('/set50', getStock)

app.listen(port, () => {
    console.log('App running on port ' + port)
})