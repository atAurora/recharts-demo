import React from 'react';
import PriceLineChart from "./PriceLineChart";

export interface PriceLineChartType {
    price: number,
    time: string | number | Date
}


function App() {
    const data: Array<PriceLineChartType> = []
    let initTime = new Date().toLocaleString()
    for (let i = 0; i < 10; i++) {
        let price = parseFloat((Math.random() * 1000).toFixed(2))
        data.push({
            price,
            time: initTime
        })
    }

    console.log(data)

    return (
     <div className="App">
          <PriceLineChart data={data}/>
      </div>
     );
}

export default App;
