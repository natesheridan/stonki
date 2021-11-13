import React from 'react'
import './Main.css'
import {Route} from 'react-router-dom'
import StockContainer from '../StockContainer/StockContainer'
import SingleStockView from '../SingleStockView/SingleStockView'
import { users } from '../../util/userDumbData'

const Main = () => {
    return (
        <div className="main">
            <Route
            exact path={['/', '/home']}
            render ={() => <StockContainer data={['AAPL', 'TSLA', 'ABC', 'BOX', 'AAPL', 'TSLA', 'ABC', 'AAPL', 'TSLA', 'ABC', 'AAPL', 'TSLA', 'ABC', 'AAPL', 'TSLA', 'ABC', 'AAPL', 'TSLA', 'ABC', 'AAPL', 'TSLA', 'ABC', 'AAPL', 'TSLA', 'ABC', 'AAPL', 'TSLA', 'ABC', 'AAPL', 'TSLA', 'ABC', 'AAPL', 'TSLA', 'ABC', 'AAPL', 'TSLA', 'ABC', 'AAPL', 'TSLA', 'ABC']}/>}
            />
            <Route
            exact path="/stock/:symbol"
            render={({match}) => <SingleStockView symbol={match.params.symbol}/>}
            />
             <Route
            exact path="/profile"
            //USER DATA IS BEING PASSING IN AS DATA BELOW - COMPONENT KNOWS TO RENDER QTY and VALUE in table bc type
            render ={() => <StockContainer data={users['123041'].portfolio} type='portfolio'/>}
            />
            {/*<Route
            exact path="/"
            render ={() => <TickerContainer />}
            /> */}
        </div>
    )
}

export default Main
