import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import DataService from '../../Services/DataService';
import { AuthContext } from '../../Context/AuthContext';



export default function DoughnutChart() {
  const [masks, setMasks] = useState({ 'mask': 0, 'noMask': 0 });
  const [chartData, setChartData] = useState({
    labels: [
      'Mask',
      'No mask',
    ],
    borderColor: '#242424',
    datasets: [{
      data: [getMaskData(), getNoMaskData()],
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
  })
  useEffect(() => {
    setInterval(() => {
      DataService.getMasks().then(data => {
        masks.mask = 0;
        masks.noMask = 0;
        data.datas.map((m) => {
          m.mask == 'M' ? masks.mask++ : masks.noMask++;
          setMasks(masks)
          setChartData({
            labels: [
              'Mask',
              'No mask',
            ],
            borderColor: '#242424',
            datasets: [{
              data: [getMaskData(), getNoMaskData()],
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
          })
        })
        console.log(masks)
      });
    }, 1000);

  }, []);

  function getMaskData() {
    return masks.mask;
  }

  function getNoMaskData() {
    return masks.noMask;
  }

  return (
    <div>
      <Doughnut data={chartData} />
    </div>
  );
}