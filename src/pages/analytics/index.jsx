import React from 'react';
import { Alert, Overview, Reproduction, Variables } from './components';
import './style.css';
import BarChart from '../../components/charts/Bar';

import { Tabs } from 'antd';
import { useState } from 'react';
import LineChart from '../../components/charts/Line';
const { TabPane } = Tabs;

//

//

const Analytics = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className='analytics-container'>
      <div className='overview-section'>
        <h2 className='overview-heading'>Overview</h2>
        <div className='overview-tabs-section-container'>
          <Tabs
            defaultActiveKey='1'
            onChange={onChange}
            items={[
              {
                label: `Overview`,
                key: '1',
                children: <Overview />,
              },
              {
                label: `Alert`,
                key: '2',
                children: <Alert />,
              },
              {
                label: `Reproduction`,
                key: '3',
                children: <Reproduction />,
              },
            ]}
          >
            {/* <TabPane
            tab='Overview'
            key='1'
          >
            <Overview />
          </TabPane>
          <TabPane
            tab='Alert'
            key='2'
          >
            <Alert />
          </TabPane>
          <TabPane
            tab='Reproduction'
            key='3'
          >
            <Reproduction />
          </TabPane> */}
          </Tabs>
        </div>
      </div>
      <div className='variables-section'>
        {/* <h2 className='variables-heading'>Variables</h2> */}
        <Variables />
      </div>
    </div>
  );
};

export default Analytics;
