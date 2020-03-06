const pool = require('./pool-connection')
const moment = require('moment')

const getProfitPercent = (req, res) => {

    // stockList = req.params.stockList
    // stockList = JSON.parse(decodeURIComponent(stockList))
    // dateRange = req.params.dateRange
    // dateRange = JSON.parse(decodeURIComponent(dateRange))

    stockList = [   {"name":"GPSC","amount":10000},
                    {"name":"BEM","amount":10000},
                    {"name":"BGRIM","amount":10000},
                    {"name":"CPF","amount":10000},
                    {"name":"BTS","amount":10000}]
    // stockList = [   {"name":"BH","amount":10000},
    //                 {"name":"SCB","amount":10000},
    //                 {"name":"GLOBAL","amount":10000},
    //                 {"name":"BEM","amount":10000}]
    dateRange = [{  beginDate: '2019-8-22', 
                    endDate: '2019-8-29'}]

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
        lastDate = moment(results.rows[results.rows.length-1].date).format('YYYY-MM-DD')
        for(j = 0; j<stockList.length; j++){
            balance = stockList[j].amount
            numOfStock = 0
            limitedBuy = 0
            stockPrice = 0.0
            // console.log(stockList[j].name)
            for(i = 0; i<results.rows.length; i++){
                if(results.rows[i].symbol == stockList[j].name){
                    date = moment(results.rows[i].date).format('YYYY-MM-DD')
                    if(date != lastDate){
                        stockPrice = results.rows[i+1].open
                        // buy
                        if(results.rows[i].status == '1.0' && balance > results.rows[i].close && limitedBuy < 3){
                            // stockPrice = results.rows[i].close
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
                        }
                        // sell
                        else if(results.rows[i].status == '-1.0' && numOfStock != 0){
                            // balance = balance
                            // stockPrice = results.rows[i].close
                            // if(numOfStock != 0){ ^^^
                            sellAmount = stockPrice*numOfStock
                            fee = sellAmount*0.00157*1.07
                            balance += sellAmount
                            balance -= fee
                            numOfStock = 0
                            limitedBuy = 0
                            // }
                        }
                    }
                    
                    // stockPrice = results.rows[i].close
                    // date = moment(results.rows[i].date).format('YYYY-MM-DD')
                    else if(date == lastDate){
                        stockPrice = results.rows[i].open
                        sellAmount = stockPrice*numOfStock
                        fee = sellAmount*0.00157*1.07
                        balance += sellAmount
                        balance -= fee
                        numOfStock = 0
                        profit = (balance - stockList[j].amount) / 100
                        console.log(profit.toFixed(2))
                        // console.log("-------------------")
                        profitStockList.push({"name": stockList[j].name, "profit": profit})
                    }
                }
            }
            
        }
        res.status(200).json(profitStockList)
        // res.status(200).json(results.rows)
    })
}

module.exports = getProfitPercent