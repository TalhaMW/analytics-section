import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

const LineChart = ({ chartData }) => {
  return (
    <>
      <Line
        data={chartData}
        options={{ responsive: true, maintainAspectRatio: true }}
      />
    </>
  );
};

export default LineChart;
