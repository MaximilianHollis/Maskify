import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function DoughnutChart() {
  const data = {
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
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
/*   const { data, setData } = useState(dummyData);
 
  useEffect(() => {
    setInterval(() => {
      setData(data)
    }, '5000')
  }) */
  return (
    <div>
      <h2>I AM DONUT :)</h2>
      <Doughnut data={data} />
    </div>
  );
}