import React, { useEffect, useState } from "react";
import StockContainer from "./../StockContainer/StockContainer";
import {getSearchResults} from "./../../util/api";
import './Search.css'

const Search = ({ amount = 3 }) => {
    const [value, setValue] = useState("");
    const [resultTable, setResultTable] = useState(null)


    useEffect(() => {
        fetchQueryResults(value)
    }, [value]);

    const fetchQueryResults = async () => {
        let response = await getSearchResults(value, amount)
        let arrOfSymbols = response.data.map(stockObj=>stockObj.symbol);
        setResultTable((<StockContainer data={arrOfSymbols}/>))
    }
    
    const onChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="search-view">
            <div>Search:</div>
            <input className="search-input" value={value} onChange={onChange} />
            {resultTable}
        </div>
  );
};

export default Search;