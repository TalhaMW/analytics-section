import React, { useState } from 'react';
import BarChart from '../../../../components/charts/Bar';
import LineChart from '../../../../components/charts/Line';
import PieChart from '../../../../components/charts/PieChart';

import './style.css';
import variabledata from './text';

const Variables = () => {
  const [renderigData, setRenderingData] = useState(variabledata);

  const changeHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === 'selectColumns') {
      setRenderingData(variabledata);
      return;
    }
    const filteredData = variabledata.filter(
      (data) => data.variableHeading === e.target.value
    );
    // console.log(filteredData);
    setRenderingData(filteredData);
  };
  console.log(renderigData);
  return (
    <div>
      <div className='heading-dropdown-container'>
        <h2>Variables</h2>
        <div className='variable-dropdown'>
          <select
            onChange={changeHandler}
            name=''
            id=''
          >
            <option value='selectColumns'>Select Columns</option>
            {variabledata.map((data) => {
              return (
                <option value={data.variableHeading}>
                  {data.variableHeading}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {/* <div className='variable-dropdown'>
        <select
          onChange={changeHandler}
          name=''
          id=''
        >
          <option value='selectColumns'>Select Columns</option>
          {variabledata.map((data) => {
            return (
              <option value={data.variableHeading}>
                {data.variableHeading}
              </option>
            );
          })}
        </select>
      </div> */}
      <div className='variable-card-container'>
        {renderigData.map((data) => {
          return (
            <div className='card'>
              <div className='card-heading-text'>
                <div className='card-heading'>{data.variableHeading}</div>
                <div className='card-sub-heading'>
                  {data.variableScondaryHeading}
                </div>
              </div>
              <div className='initial-data-table'>
                {data.intialTableData.map((data) => {
                  return (
                    <div className='initial-data-cnt'>
                      <div className='initial-data-heading'>
                        {data.dataHeading}
                      </div>
                      <div className='initial-data-value'>{data.value}</div>
                    </div>
                  );
                })}
              </div>
              <div className='secondary-data-table'>
                {data.secondaryTableData.map((data) => {
                  return (
                    <div className='secondary-data-cnt'>
                      <div className='secondary-data-heading'>
                        {data.dataHeading}
                      </div>
                      <div className='secondary-data-value'>{data.value}</div>
                    </div>
                  );
                })}
              </div>
              <div className='graph-container'>
                <BarChart
                  title
                  chartData={{
                    labels: [10000, 20000, 30000, 40000, 50000],
                    datasets: [
                      {
                        label: data.variableHeading,
                        data: [
                          '12000',
                          '21000',
                          '63000',
                          '35000',
                          '52000',
                          '42000',
                          ,
                          '11000',
                          '67000',
                        ],
                        backgroundColor: ['#377eb8'],
                      },
                    ],
                  }}
                />
              </div>
            </div>
          );
        })}
        {/* <div className='card'>
          <div className='card-heading-text'>
            <div className='card-heading'>longitude</div>
            <div className='card-sub-heading'>Real Number (R)</div>
          </div>
          <div className='initial-data-table'>
            <div className='initial-data-heading'>Distinct</div>
            <div className='initial-data-value'>844</div>
          </div>
          <div className='secondary-data-table'>
            <div className='secondary-data-heading'>Minimum</div>
            <div className='secondary-data-value'>-124.35</div>
          </div>
          <div className='graph-container'>Graph</div>
        </div> */}
      </div>
    </div>
  );
};

export default Variables;
