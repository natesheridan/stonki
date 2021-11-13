import React from 'react'
import TickerArticle from './../TickerArticle/TickerArticle'
import './TickerContainer.css'

const TickerContainer = (data, type) => {
    //type changes how the api call will be made for each article
    const generateTickerArticles = () => {
        if(type === 'stock'){

        }
        if(type === 'crypto'){

        }
    }
    return (
        <table className="ticker-container">

            <tr className="ticker-article">
                <th className="tkrH-name">Name</th>
                <th className="tkrH-symbol">symbol</th>
                <th className="tkrH-price">price</th>
                <th className="tkrH-change">change</th>
                <th className="tkrH-change-percentage">changePercentage</th>
                <th className="tkrH-day-low">dayLow</th>
                <th className="tkrH-day-high">dayHigh</th>
                <th className="tkrH-open">open</th>
            </tr>
            <TickerArticle ticker="AAPL"/>
        </table>
    )
}

export default TickerContainer
