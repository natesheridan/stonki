import React, {useEffect, useState} from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {getStockPriceHistory} from '../../util/api'
import './Chart.css'
const Chart = ({symbol, start, end, timeseries}) => {
  const [historyData, setHistoryData] = useState(null);
  const [params, setParams] = useState({
    from: start,
    to: end,
    timeseries: timeseries
  })

  useEffect(()=>{
      fetchHistory()
  }, [params])

  const fetchHistory = async () => {
    let response = await getStockPriceHistory(symbol, params)
    let data = response.historical
    let count=0;
    setHistoryData(data.reverse())
  }

  const changeChartParams = (adjustment) => {
    let parameters = {
      from: start,
      to: end,
      timeseries: adjustment
    }
    setParams(parameters)
  }
  return (
    <div className="chart">

      <LineChart width={window.innerWidth - (window.innerWidth*0.15)} height={500} data={historyData}>
        <Line type="monotone" dataKey="close" stroke="#00a7e1" />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis dataKey='close'/>
        <Tooltip/>
      </LineChart>
      <section className="chart-time-buttons">
        <button onClick={()=> {changeChartParams(5)}}>5 days</button>
        <button onClick={()=> {changeChartParams(30)}}>30 days</button>
        <button onClick={()=> {changeChartParams(90)}}>3 months</button>
        <button onClick={()=> {changeChartParams(365)}}>1 year</button>
        <button onClick={()=> {changeChartParams('alltime')}}>All time</button>
      </section>
    </div> 
  )
}

export default Chart

