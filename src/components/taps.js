import React from 'react'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import '../assests/styles/component/taps.scss';
import TapBody from './tabBody'
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Demo = () => (
  <Tabs defaultActiveKey="1" onChange={callback} className='contnet-flex'>
    <TabPane tab="Simple Bookmarking" key="1" >
        <TapBody/>
    </TabPane>
    <TabPane tab="Speedy Searching" key="2">
    <TapBody/>
    </TabPane>
    <TabPane tab="Easy Sharing" key="3">
    <TapBody/>
    </TabPane>
  </Tabs>
);

export default Demo;