const pool = require('./pool-connection')

const getProfitPercent = (req, res) => {

    // stockList = req.params.stockList
    // stockList = JSON.parse(decodeURIComponent(stockList))
    // dateRange = req.params.dateRange
    // dateRange = JSON.parse(decodeURIComponent(dateRange))

    stockList = [{"name":"SCC","amount":10000},{"name":"MTC","amount":10000},{"name":"PTT","amount":10000},{"name":"BEM","amount":10000},{"name":"BANPU","amount":10000}]
    // stockList = [{"name":"EGCO","amount":10000},{"name":"CPN","amount":10000},{"name":"BANPU","amount":10000},{"name":"TMB","amount":10000}]
    dateRange = [{beginDate: '2019-12-27', endDate: '2020-1-24'}]

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
            stockPrice = 0.0
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
                    stockPrice = results.rows[i].close
                }
                d = new Date(results.rows[i].date)
                date = d.getUTCFullYear().toString() + '-' + (d.getUTCMonth()+1).toString() + '-' + (d.getUTCDate()+1).toString()
                if(results.rows[i].symbol == stockList[j].name && date == dateRange[0].endDate){
                    sellAmount = stockPrice*numOfStock
                    balance += sellAmount
                    numOfStock = 0
                    balance = (balance-50)*0.99843
                    profit = (balance - stockList[j].amount) / 100
                    console.log(profit)
                    console.log("------------------------------------")
                    profitStockList.push({"name": stockList[j].name, "profit": profit})
                }
            }
            
        }
        res.status(200).json(profitStockList)
        // res.status(200).json(results.rows)
    })
}

module.exports = getProfitPercent