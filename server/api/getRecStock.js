const pool = require('./pool-connection')
const moment = require('moment')

const getRecStock = (req, res) => {

    todayDate = req.params.dateRange
    todayDate = JSON.parse(decodeURIComponent(todayDate))

    queryStr = "select date,symbol,open,high,low,close,percentChange,volume,money,status from trade \
    where (status = '1.0' or status = '-1.0') and date = '" + todayDate + "' \
    and symbol in (select symbol from company where set50 = '1') order by status desc;"
    pool.query(queryStr , (err, results) => {
        try{
            data = []
            status = ''
            for(let i = 0; i < results.rows.length; i++){
                if(results.rows[i].status == '-1.0'){
                    status = 'sell'
                }else if(results.rows[i].status == '1.0'){
                    status = 'buy'
                }
                record = {
                    "date": moment(results.rows[i].date).format('YYYY-MM-DD'),
                    "symbol": results.rows[i].symbol,
                    "open": results.rows[i].open,
                    "high": results.rows[i].high,
                    "low": results.rows[i].low,
                    "close": results.rows[i].close,
                    "percentchange": results.rows[i].percentchange,
                    "volume": results.rows[i].volume,
                    "money": results.rows[i].money,
                    "status": status
                }
                data.push(record)
            }
            res.status(200).json(data)
        } catch (err) {
            console.log("ERROR!!!")
        }
        
    })
}

module.exports = getRecStock