const pool = require('./pool-connection')

const getStock = (req, res) => {
    pool.query('select * from trade', (err, results) => {
        if(err){
            throw err
        }
        res.status(200).json(results.rows)
    })
}

module.exports = getStock