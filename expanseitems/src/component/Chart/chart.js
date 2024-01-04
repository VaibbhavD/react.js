import React from "react";
import ChartBar from "./chartBar";
import './chart.css';

function Chart(props) {
    const datapointValues=props.datapoint.map(exp=>exp.value)
    const totalMax=Math.max(...datapointValues)

    return(
        <div className='chart'>
            {props.datapoint.map((expence)=>(
                <ChartBar
                key={expence.label}
                value={expence.value}
                maxvalue={totalMax}
                label={expence.label}
                />
            ))}
        </div>
    )
}
export default Chart