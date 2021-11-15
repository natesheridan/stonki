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
            render ={() => {return(
                <>
                    <h1 className="welcome-title">Hi {users['123041'].name},</h1>
                    <h2 className="welcome-title">Welcome to Stonki!</h2>
                    <br></br>

                    <StockContainer title="Featured Stocks" data={['GOOG', 'TSLA', 'FB', 'NVDA', 'DIS', 'PYPL', 'SHOP', 'AMD', 'ABNB', 'COIN', 'ADSK', 'LCID', 'NET', 'RBLX', 'U', 'PLTR', 'XPEV', 'AFRM']}/>
                </>
            )}}
            />
            <Route
            exact path="/stock/:symbol"
            render={({match}) => <SingleStockView symbol={match.params.symbol}/>}
            />
             <Route
            exact path="/profile"
            //USER DATA IS BEING PASSING IN AS DATA BELOW - COMPONENT KNOWS TO RENDER QTY and VALUE in table bc type
            render ={() => <StockContainer title="User Portfolio" data={users['123041'].portfolio} type='portfolio'/>}
            />
            {/*<Route
            exact path="/"
            render ={() => <TickerContainer />}
            /> */}
        </div>
    )
}

export default Main
