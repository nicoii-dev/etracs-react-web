import React from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts'

const BarChart = () => {
    const options = {
        title: {
            text: "Basic Column Chart"
        },
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [
                { label: "Apple",  y: 10  },
                { label: "Orange", y: 15  },
                { label: "Banana", y: 25  },
                { label: "Mango",  y: 30  },
                { label: "Grape",  y: 28  }
            ]
        }
        ]
    }

    return (
        <CanvasJSChart 
            options = {options}
        />
    )
}

export default BarChart;