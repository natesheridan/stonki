import React, {useEffect, useState} from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {getStockPriceHistory} from '../../util/api'

const Chart = ({symbol, start, end, limit, type}) => {
  const [historyData, setHistoryData] = useState(null);

  useEffect(()=>{
      fetchHistory()
  }, [])

  const fetchHistory = async () => {
    let response = await getStockPriceHistory(symbol, start, end, limit, type)
    console.log(response)
    setHistoryData(response.historical.reverse())
  }
  return (  
    <LineChart width={500} height={500} data={historyData}>
      <Line type="monotone" dataKey="close" stroke="#00a7e1" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis dataKey='close'/>
      <Tooltip/>
    </LineChart>
  )
}

export default Chart

