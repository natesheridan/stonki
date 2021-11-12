import React from 'react'
import TickerArticle from './../TickerArticle/TickerArticle'

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
            <TickerArticle ticker="AAPL"/>
        </table>
    )
}

export default TickerContainer
