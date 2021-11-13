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
                return (<StockArticle symbol={indvStock.symbol} qty={indvStock.quantity} purchasePrice={indvStock.purchasePrice}/>)
            }
            if(!type){
                return (<StockArticle symbol={indvStock}/>)
            }
        })
        setElements(generatedElements)
    }
    return (
        <table className="ticker-container">

            <tr className="ticker-header">
                <td className="tkrH-symbol">Symbol</td>
                {type==="portfolio" && <td className="tkrH-qty">Quantity</td>}
                {type==="portfolio" && <td className="tkrH-value">Value</td>}
                {type==="portfolio" && <td className="tkrH-purchase-price">Purchase Price</td>}
                {type==="portfolio" && <td className="tkrH-purchase-price">Profits</td>}
                <td className="tkrH-name">Company</td>
                <td className="tkrH-price">Price</td>
                <td className="tkrH-change">Day's Change</td>
                <td className="tkrH-change-percentage">Day %</td>
                <td className="tkrH-day-low">Day Low</td>
                <td className="tkrH-day-high">Day High</td>
                <td className="tkrH-open">Open Price</td>
            </tr>
            {elements}
        </table>
    )
}

export default StockContainer;
