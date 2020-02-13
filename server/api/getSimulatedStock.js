const pool = require('./pool-connection')

const getSimulatedStock = (req, res) => {

    stockList = req.params.stockList
    stockList = JSON.parse(decodeURIComponent(stockList))
    dateRange = req.params.dateRange
    dateRange = JSON.parse(decodeURIComponent(dateRange))

    // all symbol string query
    allStockStr = "("
    for(i=0; i<stockList.length; i++){
        allStockStr += "symbol = '" + stockList[i].name + "' "
        if(i != stockList.length-1){
            allStockStr += "or "
        }else{
            allStockStr += ") "
        }
    }

    queryStr = "select date,symbol,open,high,low,close,percentChange,volume,money,status from trade \
    where " + allStockStr + " \
    and date between '" + dateRange[0].beginDate + "' and '" + dateRange[0].endDate + "';"
    pool.query(queryStr , (err, results) => {
        if(err){
            throw err
        }

        // all stock
        historyList = []
        for(j = 0; j<stockList.length; j++){
            balance = stockList[j].amount
            numOfStock = 0
            limitedBuy = 0
            console.log(stockList[j].name)
            for(i = 0; i<results.rows.length; i++){
                if(results.rows[i].symbol == stockList[j].name){
                        // buy
                    if(results.rows[i].status == '1' && balance > results.rows[i].close && limitedBuy < 3){
                        stockPrice = results.rows[i].close
                        if(limitedBuy < 2){
                            buyAmount = balance/2.0
                        }else {
                            buyAmount = balance
                        }
                        numOfBuyStock = parseInt(buyAmount/stockPrice)
                        buyAmount = stockPrice*numOfBuyStock
                        numOfStock += numOfBuyStock
                        balance -= buyAmount
                        limitedBuy += 1
                        console.log("Buy")
                        console.log(balance)
                        historyList.push(results.rows[i])
                    }
                    // sell
                    else if(results.rows[i].status == '-1'){
                        stockPrice = results.rows[i].close
                        if(numOfStock != 0){
                            sellAmount = stockPrice*numOfStock
                            balance += sellAmount
                            numOfStock = 0
                            limitedBuy = 0
                            console.log("Sell")
                            console.log(balance)
                            historyList.push(results.rows[i])
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
            console.log("------------------------------------")
        }    
        res.status(200).json(historyList)
        // res.status(200).json(results.rows)
    })
}

module.exports = getSimulatedStock