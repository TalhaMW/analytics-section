import React from 'react';
import './style.css';
import { dataStats, variablesData } from './text';

const Overview = () => {
  return (
    <div className='overview'>
      <div className='datastat-content-container'>
        <div className='data-container'>
          <h2>Dataset statistics</h2>

          {dataStats.map((dataObj) => (
            <div
              key={dataObj.id}
              className='data'
            >
              <div className='data-heading'>{dataObj.dataHeading}</div>
              <div className='data-vallue'>{dataObj.value}</div>
            </div>
          ))}

          <div className='data'>
            <div className='data-heading'>Number of Variables</div>
            <div className='data-vallue'>10</div>
          </div>
        </div>
        <div className='variable-types-container'>
          <h2 style={{ paddingBottom: '15px' }}>Variable Types</h2>
          {variablesData.map((variable) => {
            return (
              <div
                key={variable.id}
                className='variables'
              >
                <div className='data-heading'>{variable.dataHeading}</div>
                <div className='data-vallue'>{variable.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Overview;
