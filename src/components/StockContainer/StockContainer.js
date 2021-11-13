import React, {useEffect, useState} from 'react'
import StockArticle from '../StockArticle/StockArticle'
import './StockContainer.css'

const StockContainer = ({data, type}) => {
    const [elements, setElements] = useState(null);

    useEffect(() => {
        generateStockArticles()
        
    }, [])
    
    const generateStockArticles = () => {
        const generatedElements = data.map((indvStock) => {
            if(type === 'portfolio'){
                return (<StockArticle symbol={indvStock.symbol} qty={indvStock.quantity}/>)
            }
            if(!type){
                return (<StockArticle symbol={indvStock}/>)
            }
        })
        setElements(generatedElements)
    }
    return (
        <table className="ticker-container">

            <thead className="ticker-header">
                {type==="portfolio" && <th className="tkrH-qty">Quantity</th>}
                {type==="portfolio" && <th className="tkrH-qty">Value</th>}
                <th className="tkrH-name">Name</th>
                <th className="tkrH-symbol">symbol</th>
                <th className="tkrH-price">price</th>
                <th className="tkrH-change">change</th>
                <th className="tkrH-change-percentage">changePercentage</th>
                <th className="tkrH-day-low">dayLow</th>
                <th className="tkrH-day-high">dayHigh</th>
                <th className="tkrH-open">open</th>
            </thead>
            {elements}
        </table>
    )
}

export default StockContainer;
