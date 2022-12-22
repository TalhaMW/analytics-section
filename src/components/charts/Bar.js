import React from 'react';

import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ chartData, axix, min, max, stepSize }) => {
  return (
    <>
      <Bar
        data={chartData}
        options={{
          indexAxis: axix,
          maintainAspectRatio: true,
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: '',
            },
          },
          scales: {
            y: {
              suggestedMin: min,
              suggestedMax: max,
              ticks: {
                stepSize: stepSize,
              },
            },
          },
        }}
      />
    </>
  );
};

export default BarChart;
