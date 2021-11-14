import React, {useEffect, useState} from 'react'
import {getStockQuote} from '../../util/api'


const SingleStockView = ({symbol}) => {
    const [currentData, setCurrentData] = useState(null);

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
                    <p className="tkr-symbol">{symbol}</p>
                    <p className="tkr-name">{!currentData ?  "Loading... ": currentData.name}</p>
                    <p className="tkr-price">{!currentData ?  "Loading... ": `$${(currentData.price).toFixed(2)}`}</p>
                    <p className="tkr-change">{!currentData ?  "Loading... ": `$${(currentData.change).toFixed(2)}`}</p>
                    <p className="tkr-change-percentage">{!currentData ?  "Loading... ": `${(currentData.changesPercentage).toFixed(3)}%`}</p>
                    <p className="tkr-day-low">{!currentData ?  "Loading... ": `$${(currentData.dayLow).toFixed(2)}`}</p>
                    <p className="tkr-day-high">{!currentData ?  "Loading... ": `$${(currentData.dayHigh).toFixed(2)}`}</p>
                    <p className="tkr-open">{!currentData ?  "Loading... ": `$${(currentData.open).toFixed(2)}`}</p>
            </div>
        </div>
    )
}

export default SingleStockView
