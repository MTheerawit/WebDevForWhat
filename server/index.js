const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 9000
const app = express()

// API
const getStock = require('./api/getStock')
const getRecStock = require('./api/getRecStock')
const getSimulatedStock = require('./api/getSimulatedStock')
const getProfitPercent = require('./api/getProfitPercent')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req, res) => {
    res.send("index")
})
app.get('/set50', getStock)
app.get('/getRecStock', getRecStock)
app.get('/getSimulatedStock/:stockList/:dateRange', getSimulatedStock)
app.get('/getProfit', getProfitPercent)

app.listen(port, () => {
    console.log('App running on port ' + port)
})