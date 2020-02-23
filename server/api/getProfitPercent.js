const pool = require('./pool-connection')

const getProfitPercent = (req, res) => {

    // stockList = req.params.stockList
    // stockList = JSON.parse(decodeURIComponent(stockList))
    // dateRange = req.params.dateRange
    // dateRange = JSON.parse(decodeURIComponent(dateRange))

    stockList = [{"name":"GPSC","amount":10000},{"name":"BEM","amount":10000},{"name":"BGRIM","amount":10000},{"name":"CPF","amount":10000},{"name":"BTS","amount":10000}]
    // stockList = [{"name":"BEM","amount":10000}]
    dateRange = [{beginDate: '2019-8-22', endDate: '2019-9-5'}]

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
    where symbol in (select symbol from company where set50 = '1') \
    and " + allStockStr + " \
    and date between '" + dateRange[0].beginDate + "' and '" + dateRange[0].endDate + "';"
    pool.query(queryStr , (err, results) => {
        if(err){
            throw err
        }

        // all stock
        profitStockList = []
        for(j = 0; j<stockList.length; j++){
            balance = stockList[j].amount
            numOfStock = 0
            limitedBuy = 0
            console.log(stockList[j].name)
            for(i = 0; i<results.rows.length; i++){
                if(results.rows[i].symbol == stockList[j].name){
                    // buy
                    if(results.rows[i].status == '1.0' && (balance-50)*0.99843 > results.rows[i].close && limitedBuy < 3){
                        balance = (balance-50)*0.99843
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
                    }
                    // sell
                    else if(results.rows[i].status == '-1.0'){
                        balance = (balance-50)*0.99843
                        stockPrice = results.rows[i].close
                        if(numOfStock != 0){
                            sellAmount = stockPrice*numOfStock
                            balance += sellAmount
                            numOfStock = 0
                            limitedBuy = 0
                        }
                    }
                }
                d = new Date(results.rows[i].date)
                date = d.getUTCFullYear().toString() + '-' + (d.getUTCMonth()+1).toString() + '-' + (d.getUTCDate()+1).toString()
                if(results.rows[i].symbol == stockList[j].name && date == dateRange[0].endDate){
                    // console.log(results.rows[i])
                    // right here
                }
            }
            // // Check net balance
            // stockPrice = results.rows[].close //bug logic
            // sellAmount = stockPrice*numOfStock
            // balance += sellAmount
            // numOfStock = 0
            // balance = (balance-50)*0.99843
            // profit = (balance - stockList[j].amount) / 100
            // console.log(profit)
            // console.log("------------------------------------")
            // profitStockList.push({"name": stockList[j].name, "profit": profit})
        }
        // // what date?
        // d = new Date(results.rows[0].date)
        // date = d.getUTCFullYear().toString() + '-' + (d.getUTCMonth()+1).toString() + '-' + (d.getUTCDate()+1).toString()
        // console.log(date)
        // res.status(200).json(profitStockList)
        res.status(200).json(results.rows)
    })
}

module.exports = getProfitPercent