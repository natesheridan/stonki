const axios= require( 'axios' );
const fmp = require('financialmodelingprep')('9626b292f3ee8a5b79cb7f5e4746c12b')

export const getStockQuote = (symbol) => {
    return fmp.stock(symbol).quote()
    }
export const getMultipleStockQuotes = (arrOfSymbols) => {
    let stocks = arrOfSymbols.join(',')
    return fmp.stock(stocks).quote()
}
export const getUserData = (userID) => {
    return fetch(`https://stonkiusers.s3.us-west-1.amazonaws.com/users.json`)
    .then (data => data)
}
// export const getStockPriceHistory = (symbol, params) => {
//     return fmp.stock(symbol).history({ start_date: '2018-03-12', end_date: '2019-03-12' }) 
// }
export const getStockPriceHistory = (symbol, params) => {
    const {from, to, timeseries} = params
    let fromString = `&from=${from}`;
    let toString = `&to=${to}`
    let timeseriesString;
    if (timeseries==="alltime"){
        return axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?serietype=line&apikey=9626b292f3ee8a5b79cb7f5e4746c12b`)
        .then (data => data.data)
    }
    if (timeseries>0){
        timeseriesString = `&timeseries=${timeseries}`
        fromString = '';
        toString = '';
    }
    //REPLACING AXIOS.GET with FETCH breaks everything...
    return axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?serietype=line${fromString}${toString}${timeseriesString}&apikey=9626b292f3ee8a5b79cb7f5e4746c12b`)
    .then (data => data.data)}


export const getSearchResults = (query, results) => {
    return axios.get(`https://financialmodelingprep.com/api/v3/search?query=${query}&limit=${results}&exchange=NASDAQ&apikey=9626b292f3ee8a5b79cb7f5e4746c12b`)
}