const pool = require('./pool-connection')

const getStock = (req, res) => {
    pool.query("select * from trade where symbol in (select symbol from company where set50 = '1')", (err, results) => {
        if(err){
            throw err
        }
        res.status(200).json(results.rows)
    })
}

module.exports = getStock