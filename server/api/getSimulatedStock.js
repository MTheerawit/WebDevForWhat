const pool = require('./pool-connection')

const getSimulatedStock = (req, res) => {
    symbol = 'GULF'
    beginDate = '2019-08-01'
    endDate = '2019-09-30'
    // what about amount ?? talk with man
    queryStr = "select date,symbol,open,high,low,close,percentChange,volume,money,status from trade \
    where symbol = '" + symbol + "' \
    and (status = '1' or status = '-1') \
    and date between '" + beginDate + "' and '" + endDate + "';"
    pool.query(queryStr , (err, results) => {
        if(err){
            throw err
        }
        res.status(200).json(results.rows)
    })
}

module.exports = getSimulatedStock