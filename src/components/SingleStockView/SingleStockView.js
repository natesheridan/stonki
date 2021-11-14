import React, {useEffect, useState} from 'react'
import {getStockQuote} from '../../util/api'
import Chart from './../Chart/Chart'


const SingleStockView = ({symbol}) => {
    const [currentData, setCurrentData] = useState(null);
    const LogoLink = `https://eodhistoricaldata.com/img/logos/US/${symbol.toUpperCase()}.png`
    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () => {
      let response = await getStockQuote(symbol)
      setCurrentData(response[0])
    }
    return (
        
        <div className ='single-stock-view'>
            <div className ='single-chart'></div>
            <div className ='single-details'>
                    {!currentData ?  "Loading... ": <Chart symbol={symbol} start='2021-01-01' end='2021-11-5' timeseries=""/>}
                    <p className="s-symbol">{symbol}</p>
                    <img src={LogoLink}></img>
                    <p className="s-name">{!currentData ?  "Loading... ": currentData.name}</p>
                    <p className="s-price">{!currentData ?  "Loading... ": `$${(currentData.price).toFixed(2)}`}</p>
                    <p className="s-change">{!currentData ?  "Loading... ": `$${(currentData.change).toFixed(2)}`}</p>
                    <p className="s-change-percentage">{!currentData ?  "Loading... ": `${(currentData.changesPercentage).toFixed(3)}%`}</p>
                    <p className="s-day-low">{!currentData ?  "Loading... ": `$${(currentData.dayLow).toFixed(2)}`}</p>
                    <p className="s-day-high">{!currentData ?  "Loading... ": `$${(currentData.dayHigh).toFixed(2)}`}</p>
                    <p className="s-open">{!currentData ?  "Loading... ": `$${(currentData.open).toFixed(2)}`}</p>
            </div>
        </div>
    )
}

export default SingleStockView
