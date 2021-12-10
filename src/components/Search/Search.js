import React, { useEffect, useState } from "react";
import StockContainer from "./../StockContainer/StockContainer";
import {getSearchResults} from "./../../util/api";
import './Search.css'

const Search = ({ amount = 3 }) => {
    const [value, setValue] = useState("");
    const [resultTable, setResultTable] = useState([])


    useEffect(() => {
        fetchQueryResults(value)
        console.log(value)
    }, [value]);

    const fetchQueryResults = async () => {
        let response = await getSearchResults(value, amount)
        let arrOfSymbols = response.data.map(stockObj=>stockObj.symbol);
        setResultTable(arrOfSymbols)

    }
    const generateContainer = (data) => {
        return (
            <StockContainer data={data}/>
        )}

    
    const onChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="search-view">
            <div>Search:</div>
            <input className="search-input" type="text" placeholder="ticker / company name" value={value} onChange={onChange} />
            <StockContainer key={resultTable.length} data={resultTable}/>
        </div>
    );
}
;

export default Search;