import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';


export default function LineChart() {
    //        '#36A2EB',
   //'#FF6384',
    const data = {
        datasets: [{
            label: 'Mask usage percentage',
            type: 'line',
            data: [100, 90, 85, 90, 95, 85, 95],
            fill: false,
            borderColor: '#36A2EB',
            backgroundColor: '#36A2EB',
            pointBorderColor: '#36A2EB',
            pointBackgroundColor: '#36A2EB',
            pointHoverBackgroundColor: '#36A2EB',
            pointHoverBorderColor: '#36A2EB',
            yAxisID: 'y-axis-2'
        }, {
            type: 'bar',
            label: 'Visitors',
            data: [200, 185, 590, 621, 250, 400, 95],
            fill: false,
            backgroundColor: '#71B37C',
            borderColor: '#71B37C',
            hoverBackgroundColor: '#71B37C',
            hoverBorderColor: '#71B37C',
            yAxisID: 'y-axis-1'
        }]
    };

    const options = {
        responsive: true,
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        tooltips: {
            mode: 'label'
        },
        elements: {
            line: {
                fill: false
            }
        },
        scales: {

            xAxes: [
                {
                    display: true,
                    gridLines: {
                        display: false
                    },

                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                }
            ],
            yAxes: [
                {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                    gridLines: {
                        display: false
                    },
                    labels: {
                        show: true
                    }
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        display: false
                    },
                    labels: {
                        show: true
                    }
                }
            ]
        }
    };

    return (
        <div>
            <Bar
                data={data}
                options={options}
            />
        </div>
    )
}