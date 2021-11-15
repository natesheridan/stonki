import React, {useEffect, useState} from 'react'
import StockArticle from '../StockArticle/StockArticle'
import './StockContainer.css'

const StockContainer = ({data, title, type}) => {
    const [elements, setElements] = useState(null);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        generateStockArticles()
        
    }, [])
    
    const updateTotalValue = (value) => {
        console.log(value)
        setTotalValue();
        console.log(totalValue)
    }
    const generateStockArticles = () => {
        const generatedElements = data.map((indvStock) => {
            if(type === 'portfolio'){
                return (<StockArticle updateTotalValue={updateTotalValue} symbol={indvStock.symbol} qty={indvStock.quantity} purchasePrice={indvStock.purchasePrice}/>)
            }
            if(!type){
                return (<StockArticle symbol={indvStock}/>)
            }
        })
        setElements(generatedElements)
    }
    return (
        <div className="table-wrapper">
            <h2>{title}</h2>
            {type==="portfolio" &&<h2>(${totalValue})</h2>}
            <table className="table-container">
                <thead>
                    <tr className="table-header">
                        <td></td>
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
                </thead>
                <tbody>
                {elements}
                </tbody>
            </table>
        </div>
            
    )
}

export default StockContainer;
