const pool = require('./pool-connection')

const getRecStock = (req, res) => {
    todayDate = '10/22/2019'
    queryStr = "select date,symbol,open,high,low,close,percentChange,volume,money from trade \
    where status = '1' and date = '" + todayDate + "' order by macd desc;"
    pool.query(queryStr , (err, results) => {
        if(err){
            throw err
        }
        res.status(200).json(results.rows)
    })
}

module.exports = getRecStock