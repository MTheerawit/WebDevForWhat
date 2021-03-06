const pool = require('./pool-connection')
const moment = require('moment')

const getSimulatedStock = (req, res) => {
    
        stockList = req.params.stockList
        stockList = JSON.parse(decodeURIComponent(stockList))
        dateRange = req.params.dateRange
        dateRange = JSON.parse(decodeURIComponent(dateRange))
        
        // all symbol string query
        allStockStr = "("
        for(i=0; i<stockList.length; i++){
            if(stockList[i].name == ''){
                stockList[i].name = '-'
            }
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
            try{
                // profit list
                profitStockList = []
                lastBalance = 0.0
                totalAmount = 0.0
                // history list
                historyList = []
                lastDate = moment(results.rows[results.rows.length-1].date).format('YYYY-MM-DD')
                for(j = 0; j<stockList.length; j++){
                    balance = stockList[j].amount
                    numOfStock = 0
                    limitedBuy = 0
                    stockPrice = 0.0
                    if(stockList[j].name != '-'){
                        totalAmount += balance
                    }
                    for(i = 0; i<results.rows.length; i++){
                        if(results.rows[i].symbol == stockList[j].name){
                            date = moment(results.rows[i].date).format('YYYY-MM-DD')
                            if(date != lastDate){
                                stockPrice = results.rows[i+1].open
                                // buy
                                if(results.rows[i].status == '1.0' && balance > results.rows[i+1].open && limitedBuy < 3){
                                    if(limitedBuy < 2){
                                        buyAmount = balance/2.0
                                    }else {
                                        buyAmount = balance
                                    }
                                    numOfBuyStock = parseInt(buyAmount/stockPrice)
                                    buyAmount = stockPrice*numOfBuyStock
                                    fee = buyAmount*0.00157*1.07
                                    numOfStock += numOfBuyStock
                                    balance -= buyAmount
                                    balance -= fee
                                    limitedBuy += 1
                                    record = {
                                        "date":date,
                                        "symbol":results.rows[i].symbol,
                                        "open":results.rows[i].open,
                                        "high":results.rows[i].high,
                                        "low":results.rows[i].low,
                                        "close":results.rows[i].close,
                                        "percentchange":results.rows[i].percentchange,
                                        "volume":results.rows[i].volume,
                                        "money":results.rows[i].money,
                                        "status":"buy"
                                    }
                                    historyList.push(record)
                                }
                                // sell
                                else if(results.rows[i].status == '-1.0' && numOfStock != 0){
                                    sellAmount = stockPrice*numOfStock
                                    fee = sellAmount*0.00157*1.07
                                    balance += sellAmount
                                    balance -= fee
                                    numOfStock = 0
                                    limitedBuy = 0
                                    record = {
                                        "date":date,
                                        "symbol":results.rows[i].symbol,
                                        "open":results.rows[i].open,
                                        "high":results.rows[i].high,
                                        "low":results.rows[i].low,
                                        "close":results.rows[i].close,
                                        "percentchange":results.rows[i].percentchange,
                                        "volume":results.rows[i].volume,
                                        "money":results.rows[i].money,
                                        "status":"sell"
                                    }
                                    historyList.push(record)
                                }
                            }
                            else if(date == lastDate){
                                stockPrice = results.rows[i].open
                                sellAmount = stockPrice*numOfStock
                                fee = sellAmount*0.00157*1.07
                                balance += sellAmount
                                balance -= fee
                                numOfStock = 0
                                record = {
                                    "date":date,
                                    "symbol":results.rows[i].symbol,
                                    "open":results.rows[i].open,
                                    "high":results.rows[i].high,
                                    "low":results.rows[i].low,
                                    "close":results.rows[i].close,
                                    "percentchange":results.rows[i].percentchange,
                                    "volume":results.rows[i].volume,
                                    "money":results.rows[i].money,
                                    "status":"sell ("+results.rows[i].status+")" 
                                }
                                historyList.push(record)

                                profit = ((balance - stockList[j].amount)/ stockList[j].amount)*100
                                console.log(profit.toFixed(2))
                                lastBalance += balance
                                profitStockList.push({"name": stockList[j].name, "lastBalance": balance.toFixed(2),"profit": profit.toFixed(2)})
                            }
                        }
                    }
                }
                record = {
                    "beginDate":dateRange[0].beginDate,
                    "endDate":dateRange[0].endDate,
                    "capital":totalAmount,
                    "lastBalance":lastBalance.toFixed(2),
                    "profit": (((lastBalance-totalAmount)/totalAmount)*100).toFixed(2),
                    "stockSummary":profitStockList,
                    "history": historyList
                }
                res.status(200).json(record)
                // res.status(200).json(results.rows)
            }
            catch (err) {
                console.log("ERROR!!!")
            }
            
        })  
}

module.exports = getSimulatedStock