import React, {useEffect, useState} from 'react'
import './TickerArticle.css'
import { getStockQuote } from './../../util/api'



const TickerArticle = ({ticker}) => {
    const [currentData, setCurrentData] = useState(null);
    const [stockElement, setStockElement] = useState(null);

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () => {
      let response = await getStockQuote(ticker)
      setCurrentData(response[0])
    //   let element = generateStockElement(currentData)
    //   setStockElement(element)
    }

    // const generateStockElement = (dataArr) => {
    //     console.log(dataArr)
    //     const data = dataArr

    //     return (
    //         <tr className="ticker-article">
    //             <th className="tkr-name">{data?.name}</th>
    //             <th className="tkr-symbol">{data?.symbol}</th>
    //             <th className="tkr-price">{data?.price}</th>
    //             <th className="tkr-change">{data?.change}</th>
    //             <th className="tkr-change-percentage">{data?.changesPercentage}</th>
    //             <th className="tkr-day-low">{data?.dayLow}</th>
    //             <th className="tkr-day-high">{data?.dayHigh}</th>
    //             <th className="tkr-open">{data?.open}</th>
    //         </tr>
    //     )
    // }

    return (
            <>
                <tr className="ticker-article">
                    <th className="tkr-name">{!currentData ?  "Loading... ": currentData.name}</th>
                    <th className="tkr-symbol">{!currentData ?  "Loading... ": currentData.symbol}</th>
                    <th className="tkr-price">{!currentData ?  "Loading... ": currentData.price}</th>
                    <th className="tkr-change">{!currentData ?  "Loading... ": currentData.change}</th>
                    <th className="tkr-change-percentage">{!currentData ?  "Loading... ": currentData.changesPercentage}</th>
                    <th className="tkr-day-low">{!currentData ?  "Loading... ": currentData.dayLow}</th>
                    <th className="tkr-day-high">{!currentData ?  "Loading... ": currentData.dayHigh}</th>
                    <th className="tkr-open">{!currentData ?  "Loading... ": currentData.open}</th>
                </tr> 
            </>
    )
}

export default TickerArticle

