import React,{useState, useEffect} from 'react'
import {users} from './../../util/userDumbData'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import './SaveButton.css'

const SaveButton = ({ticker}) => {
    let currentUserID = '123041'
    //this ^^ can be replaced with authID
    const [isFavorite, setIsFavorite] = useState(false)
    const [icon, setIcon] = useState(AiOutlineHeart)

    let portfolioTickers = users[currentUserID].portfolio.map(StockObject => StockObject.symbol)

    useEffect(() => {
        if(portfolioTickers.includes(ticker)){
            setIsFavorite(true)
            setIcon(AiFillHeart)
        }
    }, [isFavorite])

    const toggleFavorite = () => {
        if(!isFavorite){
            const stockObj ={
                "symbol": ticker,
                "quantity": 21,
                "purchasePrice": 5.99 // Need input field to change these two data sets
            }
            users[currentUserID].portfolio.push(stockObj)
            console.log("added")
            console.log(users[currentUserID])
            setIsFavorite(true)
            setIcon(AiFillHeart)
        }
        if(isFavorite){
            let index = users[currentUserID].portfolio.findIndex(stockObj => stockObj.symbol === ticker)
            users[currentUserID].portfolio.splice(index, 1)
            setIsFavorite(false)
            setIcon(AiOutlineHeart)
            //With backend this would be a fetch post that updates the data.
        }
    }

    return (
        <button className={`save-button ${isFavorite}`} onClick={() => {toggleFavorite()}}>
            {icon}
        </button>
    )
}

export default SaveButton
