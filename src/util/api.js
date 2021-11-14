
const fmp = require('financialmodelingprep')('9626b292f3ee8a5b79cb7f5e4746c12b')

export const getStockQuote = (ticker) => {
    return fmp.stock(ticker).quote().then(response => response);
    }
export const getUserData = (userID) => {
    return fetch(`https://stonkiusers.s3.us-west-1.amazonaws.com/users.json`)
    .then (data => data)
}