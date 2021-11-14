
const fmp = require('financialmodelingprep')('9626b292f3ee8a5b79cb7f5e4746c12b')

export const getStockQuote = (symbol) => {
    return fmp.stock(symbol).quote()
    }
export const getUserData = (userID) => {
    return fetch(`https://stonkiusers.s3.us-west-1.amazonaws.com/users.json`)
    .then (data => data)
}
export const getStockPriceHistory = (symbol, start, end, limit, type) => {
    return fmp.stock(symbol).history({start, end, limit, type} = {})
}