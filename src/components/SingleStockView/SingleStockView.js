import React, {useEffect, useState} from 'react'
import {getStockQuote} from '../../util/api'
import Chart from './../Chart/Chart'
import SaveButton from '../SaveButton/SaveButton'
import './SingleStockView.css'


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
            <div className ='single-details'>
                    <h2>{!currentData ?  "Loading... ": currentData.name} ({symbol})</h2>
                    <SaveButton ticker={symbol}/>
                    {!currentData ?  "Loading... ": <Chart symbol={symbol} start='2021-01-01' end='2021-11-5' timeseries=""/>}
                    <p className="ssvd d-price">{!currentData ?  "Loading... ": `$${(currentData.price).toFixed(2)}`}</p>
                    <p className="ssvd d-change">{!currentData ?  "Loading... ": `$${(currentData.change).toFixed(2)}`}</p>
                    <p className="ssvd d-change-percentage">{!currentData ?  "Loading... ": `${(currentData.changesPercentage).toFixed(3)}%`}</p>
                    <p className="ssvd d-day-low">{!currentData ?  "Loading... ": `$${(currentData.dayLow).toFixed(2)}`}</p>
                    <p className="ssvd d-day-high">{!currentData ?  "Loading... ": `$${(currentData.dayHigh).toFixed(2)}`}</p>
                    <p className="ssvd d-open">{!currentData ?  "Loading... ": `$${(currentData.open).toFixed(2)}`}</p>
            </div>
        </div>
    )
}

export default SingleStockView
