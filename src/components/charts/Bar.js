import React from 'react';

import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ chartData, title }) => {
  return (
    <>
      <Bar
        data={chartData}
        options={{
          maintainAspectRatio: true,
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: '',
            },
          },
        }}
      />
    </>
  );
};

export default BarChart;
