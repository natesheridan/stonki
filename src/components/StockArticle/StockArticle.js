import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './StockArticle.css'
import { getStockQuote } from '../../util/api'
import SaveButton from './../SaveButton/SaveButton'



const StockArticle = ({symbol, qty, purchasePrice, k}) => {
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
    //             <td className="tkrs t-name">{data?.name}</td>
    //             <td className="tkrs t-symbol">{data?.symbol}</td>
    //             <td className="tkrs t-price">{data?.price}</td>
    //             <td className="tkrs t-change">{data?.change}</td>
    //             <td className="tkrs t-change-percentage">{data?.changesPercentage}</td>
    //             <td className="tkrs t-day-low">{data?.dayLow}</td>
    //             <td className="tkrs t-day-high">{data?.dayHigh}</td>
    //             <td className="tkrs t-open">{data?.open}</td>
    //         </tr>
    //     )
    // }
    const link = `/stock/${symbol}`
    return (
                <tr to={link} className="table-article">
                    <td><SaveButton ticker={symbol}/></td>
                    <td className="tkrs t-symbol"><Link to={link}>{symbol}</Link></td>
                    {qty&&<td className="tkrs t-qty">{qty}</td>}
                    {qty&&
                    <td className="tkrs t-value">{!currentData ?  "Loading... ": `$${(currentData.price * qty).toFixed(2)}`}</td>}
                    {qty&&
                    <td className="tkrs t-purchase-price">{!currentData ?  "Loading... ": `$${(purchasePrice).toFixed(2)}`}</td>}
                    {qty&&
                    <td className="tkrs t-profits">{!currentData ?  "Loading... ": `$${((currentData.price * qty)-(purchasePrice * qty)).toFixed(2)}`}</td>}
                    <td className="tkrs t-name">{!currentData ?  "Loading... ": currentData.name}</td>
                    <td className="tkrs t-price">{!currentData ?  "Loading... ": `$${(currentData.price).toFixed(2)}`}</td>
                    <td className="tkrs t-change">{!currentData ?  "Loading... ": `$${(currentData.change).toFixed(2)}`}</td>
                    <td className="tkrs t-change-percentage">{!currentData ?  "Loading... ": `${(currentData.changesPercentage).toFixed(3)}%`}</td>
                    <td className="tkrs t-day-low">{!currentData ?  "Loading... ": `$${(currentData.dayLow).toFixed(2)}`}</td>
                    <td className="tkrs t-day-high">{!currentData ?  "Loading... ": `$${(currentData.dayHigh).toFixed(2)}`}</td>
                    <td className="tkrs t-open">{!currentData ?  "Loading... ": `$${(currentData.open).toFixed(2)}`}</td>
                </tr> 
    )
}

export default StockArticle

