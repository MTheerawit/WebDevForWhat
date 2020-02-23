const pool = require('./pool-connection')

const getRecStock = (req, res) => {
    todayDate = '2019-08-30'
    queryStr = "select date,symbol,open,high,low,close,percentChange,volume,money from trade \
    where status = '1.0' and date = '" + todayDate + "' \
    and symbol in (select symbol from company where set50 = '1') order by macd desc;"
    pool.query(queryStr , (err, results) => {
        if(err){
            throw err
        }
        res.status(200).json(results.rows)
    })
}

module.exports = getRecStock