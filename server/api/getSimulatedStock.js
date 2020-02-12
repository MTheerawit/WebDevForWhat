const pool = require('./pool-connection')

const getSimulatedStock = (req, res) => {

    symbol = [{"name":"GULF", "amount": 10000}, {"name":"GPSC", "amount": 5000}]
    date = [{"beginDate": '2019-08-01', "endDate": '2019-10-31'}]

    // all symbol string query
    allStockStr = "("
    for(i=0; i<symbol.length; i++){
        allStockStr += "symbol = '" + symbol[i].name + "' "
        if(i != symbol.length-1){
            allStockStr += "or "
        }else{
            allStockStr += ") "
        }
    }

    queryStr = "select date,symbol,open,high,low,close,percentChange,volume,money,status from trade \
    where " + allStockStr + " \
    and (status = '1' or status = '-1') \
    and date between '" + date[0].beginDate + "' and '" + date[0].endDate + "';"
    pool.query(queryStr , (err, results) => {
        if(err){
            throw err
        }

        res.status(200).json(results.rows)

        // one stock
        balance = symbol[0].amount
        numOfStock = 0
        for(i = 0; i<results.rows.length; i++){
            if(results.rows[i].symbol == symbol[0].name){
                if(balance > results.rows[i].close){
                    //buy
                    if(results.rows[i].status == '1'){
                        buyAmount = balance/2.0
                        stockPrice = results.rows[i].close
                        numOfBuyStock = parseInt(buyAmount/stockPrice)
                        buyAmount = stockPrice*numOfBuyStock
                        numOfStock += numOfBuyStock
                        balance -= buyAmount
                        console.log("Buy")
                        console.log(balance)
                    } 
                    else {
                        stockPrice = results.rows[i].close
                        sellAmount = stockPrice*numOfStock
                        balance += sellAmount
                        numOfStock = 0
                        console.log("Sell")
                        console.log(balance)
                    }
                }
            }
        }
        // Check net balance
        stockPrice = results.rows[results.rows.length-1].close
        sellAmount = stockPrice*numOfStock
        balance += sellAmount
        numOfStock = 0
        console.log("Total Balance After sell all stock:")
        console.log(balance)
            

        // historyList = []
        // for(i = 0; i<results.rows.length; i++){
        //     if(results.rows[i].status = '1'){
        //         historyList.push(results.rows[i])
        //     }
        // }
        // res.status(200).json(historyList)
    })
}

module.exports = getSimulatedStock