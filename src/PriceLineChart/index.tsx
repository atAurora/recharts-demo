import React from "react";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, Legend} from "recharts";
import {PriceLineChartType} from "../App";
import data from './data.json'

export default function PriceLineChart(props: { data: Array<PriceLineChartType> }) {
    const list:Array<PriceLineChartType> = []
    for (let i = 0; i < data.length; i++) {
        list.push({
            price: data[i].price,
            time: new Date(data[i].time).toLocaleString().split(' ')[1]
        })
    }
    return <>
        <LineChart width={1000} height={400} data={list} margin={{ top: 5, right: 10, bottom: 100, left: 20 }}>
            <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false}/>
            <XAxis dataKey="time" interval={59}/>
            <YAxis domain={[20550, 20580]}/>
            <Tooltip />
        </LineChart>
    </>
}