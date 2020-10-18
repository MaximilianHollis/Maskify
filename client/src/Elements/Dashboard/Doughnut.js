import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function DoughnutChart() {
  let data = {
    labels: [
      'Mask',
      'No mask',
    ],
    borderColor: '#242424',
    datasets: [{
      data: [ getRandomInt(150, 100), getRandomInt(15, 25)],
      backgroundColor: [
        '#36A2EB',
        '#FF6384',
      ],
      hoverBackgroundColor: [
        '#36A2EB',
        '#FF6384',
      ],
      borderColor: [
        '#242424',
        '#242424',
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
      <Doughnut data={data} />
    </div>
  );
}