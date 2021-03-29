import React from 'react';
import {Line,Bar} from 'react-chartjs-2';

function GraphGen(){


const data= {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
    label:"First char",
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
    }]
}

    return(
        <container>
         <h1>Line Graph</h1>
         <div className="row mx-auto">
          < Line
          data={data}
          height={6000}
          width={6000}
          />
          <div className="col md-4"> CHart 2</div>
          <div className="col md-4">Chart3</div>
          </div>
        </container>
    )
}

export default GraphGen;