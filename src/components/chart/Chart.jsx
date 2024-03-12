import React from 'react';
import {Chart as chartjs, defaults} from "chart.js/auto"
import {Bar} from "react-chartjs-2";
import sourceData from '../data/sourceData.json'



const Chart = () => {
  return (
    <div>
     <Bar className='m-2 lg:p-3 '
        data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
                {label: "count",
                data: sourceData.map((data) => data.value),
                backgroundColor:[
                    "rgb(55,48,163)",
                    "rgb(109 40 217)",
                    "rgb(30 27 75)",
                ],
                borderRadius:5,
            },
               
            ]
        }}
     />
    </div>
  );
}

export default Chart;
