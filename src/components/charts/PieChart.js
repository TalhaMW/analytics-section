import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ chartData }) => {
  return (
    <>
      <Pie data={chartData} />
    </>
  );
};

export default PieChart;
