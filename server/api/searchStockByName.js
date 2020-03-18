const pool = require('./pool-connection')

const searchStockByName = (req, res) => {
    searchStr = req.params.name.toUpperCase()
    queryStr = "select distinct symbol from trade \
    where symbol like '" + searchStr + "%' \
    and symbol in ( \
        select symbol from company \
        where set50 = '1'\
    );"
    pool.query(queryStr , (err, results) => {
        if(err){
            throw err
        }
        res.status(200).json(results.rows)
    })
}

module.exports = searchStockByName