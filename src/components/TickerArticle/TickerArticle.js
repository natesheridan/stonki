import React, {useEffect, useState} from 'react'
import { getStockQuote } from './../../util/api'



const TickerArticle = ({ticker}) => {
    const [quote, setQuote] = useState(ticker);
    const [stockElement, setStockElement] = useState(null)
    useEffect(()=>{
        
        fetchData()
    },[])
    async function fetchData() {
      let response = await getStockQuote(ticker)
      setQuote(response)
      setStockElement(generateStockElement(quote))
    }
    const generateStockElement = (dataArr) => {
        const data = dataArr[0]

        return (
            <tr className="ticker-article">
                <th className="tkr-name">{data.name}</th>
                <th className="tkr-symbol">{data.symbol}</th>
                <th className="tkr-price">{data.price}</th>
                <th className="tkr-change">{data.change}</th>
                <th className="tkr-change-percentage">{data.changePercentage}</th>
                <th className="tkr-day-low">{data.dayLow}</th>
                <th className="tkr-day-high">{data.dayHigh}</th>
                <th className="tkr-open">{data.open}</th>
            </tr>
        )
    }

    return (
        <div>
            {!stockElement
            ? 
            <tr className="ticker-article">
                <th className="tkr-name">Loading...</th>
                <th className="tkr-symbol">Loading...</th>
                <th className="tkr-price">Loading...</th>
                <th className="tkr-change">Loading...</th>
                <th className="tkr-change-percentage">Loading...</th>
                <th className="tkr-day-low">Loading...</th>
                <th className="tkr-day-high">Loading...</th>
                <th className="tkr-open">Loading...</th>
            </tr> 
            :stockElement}
        </div>
    )
}

export default TickerArticle

