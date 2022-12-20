import React from 'react';
import './style.css';
import alertData from './text';

const Alert = () => {
  return (
    <div className='alert-container'>
      <h2>Alert</h2>
      {alertData.map((data) => {
        return (
          <div className='alert-data-container'>
            <div className='text'>{data.text}</div>
            <div className='button-container'>
              <div className={data.status ? 'status' : 'missing'}>
                {data.status ? data.status : 'missing'}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Alert;
