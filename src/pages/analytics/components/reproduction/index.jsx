import React from 'react';
import './style.css';
import reproductionData from './text';

const Reproduction = () => {
  return (
    <div className='reproduction'>
      <h2>Reproduction</h2>
      {reproductionData.map((data) => {
        return (
          <div
            key={data.id}
            className='reproduction-data-container'
          >
            <div className='heading-text'>{data.headingText}</div>
            <div className='value'>{data.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Reproduction;
