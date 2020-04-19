const pool = require('./pool-connection')

const getStock = (req, res) => {
    pool.query("select distinct symbol from trade where symbol in (select symbol from company where set50 = '1') order by symbol", (err, results) => {
        record = []
        for(i = 0; i<results.rows.length; i++){
            record.push(results.rows[i].symbol)
        }
        if(err){
            throw err
        }
        res.status(200).json(record)
    })
}

module.exports = getStock