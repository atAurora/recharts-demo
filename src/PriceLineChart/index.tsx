import React from "react";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from "recharts";
import {PriceLineChartType} from "../App";
import data from './data.json'

export default function PriceLineChart(props: { data: Array<PriceLineChartType> }) {
    const list:Array<PriceLineChartType> = []
    for (let i = 0; i < 300; i++) {
        list.push({
            price: data[i].price,
            time: new Date(data[i].time).toLocaleString()
        })
    }
    console.log(list)
    return <>
        <LineChart width={1000} height={400} data={list} margin={{ top: 5, right: 100, bottom: 100, left: 0 }}>
            <Line type="monotone" dataKey="price" stroke="#8884d8"/>
            {/*<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />*/}
            <XAxis dataKey="time" interval={40} angle={50} dx={40} dy={50}/>
            <YAxis />
            <Tooltip />
        </LineChart>
        <LineChart width={1000} height={400} data={list} margin={{ top: 5, right: 10, bottom: 100, left: 20 }}>
            <Line type="monotone" dataKey="price" stroke="#8884d8"/>
            {/*<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />*/}
            <XAxis dataKey="time" interval={90}/>
            <YAxis />
            <Tooltip />
        </LineChart>
    </>
}