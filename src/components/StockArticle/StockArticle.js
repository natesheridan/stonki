import React, {useEffect, useState} from 'react'
import './StockArticle.css'
import { getStockQuote } from '../../util/api'



const StockArticle = ({symbol, qty, purchasePrice}) => {
    const [currentData, setCurrentData] = useState(null);
    const [stockElement, setStockElement] = useState(null);

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () => {
      let response = await getStockQuote(symbol)
      setCurrentData(response[0])
    //   let element = generateStockElement(currentData)
    //   setStockElement(element)
    }

    // const generateStockElement = (dataArr) => {
    //     console.log(dataArr)
    //     const data = dataArr

    //     return (
    //         <tr className="ticker-article">
    //             <td className="tkr-name">{data?.name}</td>
    //             <td className="tkr-symbol">{data?.symbol}</td>
    //             <td className="tkr-price">{data?.price}</td>
    //             <td className="tkr-change">{data?.change}</td>
    //             <td className="tkr-change-percentage">{data?.changesPercentage}</td>
    //             <td className="tkr-day-low">{data?.dayLow}</td>
    //             <td className="tkr-day-high">{data?.dayHigh}</td>
    //             <td className="tkr-open">{data?.open}</td>
    //         </tr>
    //     )
    // }

    return (
            <>
                <tr key={symbol} className="ticker-article">
                    <td className="tkr-symbol">{symbol}</td>
                    {qty&&<td className="tkr-qty">{qty}</td>}
                    {qty&&
                    <td className="tkr-value">{!currentData ?  "Loading... ": `$${(currentData.price * qty).toFixed(2)}`}</td>}
                    {qty&&
                    <td className="tkr-purchase-price">{!currentData ?  "Loading... ": `$${(purchasePrice).toFixed(2)}`}</td>}
                    {qty&&
                    <td className="tkr-profits">{!currentData ?  "Loading... ": `$${((currentData.price * qty)-(purchasePrice * qty)).toFixed(2)}`}</td>}
                    <td className="tkr-name">{!currentData ?  "Loading... ": currentData.name}</td>
                    <td className="tkr-price">{!currentData ?  "Loading... ": `$${(currentData.price).toFixed(2)}`}</td>
                    <td className="tkr-change">{!currentData ?  "Loading... ": `$${(currentData.change).toFixed(2)}`}</td>
                    <td className="tkr-change-percentage">{!currentData ?  "Loading... ": `${(currentData.changesPercentage).toFixed(3)}%`}</td>
                    <td className="tkr-day-low">{!currentData ?  "Loading... ": `$${(currentData.dayLow).toFixed(2)}`}</td>
                    <td className="tkr-day-high">{!currentData ?  "Loading... ": `$${(currentData.dayHigh).toFixed(2)}`}</td>
                    <td className="tkr-open">{!currentData ?  "Loading... ": `$${(currentData.open).toFixed(2)}`}</td>
                </tr> 
            </>
    )
}

export default StockArticle

