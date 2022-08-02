import React from 'react';
import {Chart, ArcElement, registerables} from 'chart.js'

Chart.register(...registerables);

Chart.register(ArcElement);
Chart.register()
import {Doughnut} from 'react-chartjs-2';


const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};
const Chart1 = () => {
    return (
        <div>
            <Doughnut data={data}
                      width={250} height={250} options={{maintainAspectRatio: false, responsive: false,}}/>
        </div>
    );
}
export default Chart1;