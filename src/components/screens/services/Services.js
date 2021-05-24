import React from 'react';
import { Tabs } from 'antd';
import sampleImage from '../../../static/img/core-img/3.png';

const { TabPane } = Tabs;

const Services = () => {
  return (
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="CAR WASH" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="SOFA DRY CLEANING" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="CARPET DRY CLEANING" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="HOME DEEP CLEANING" key="4">
          Content of Tab Pane 4
        </TabPane>
      </Tabs>
  )
};

export default Services;