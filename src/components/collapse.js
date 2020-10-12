import React, { Component } from 'react'
import { Collapse } from 'antd';
import icon from '../assests/images/icon-arrow.svg'
 const CollapseComponent = () => {
    const { Panel } = Collapse;
    const text = (
        <p style={{ paddingLeft: 24 }}>
         some text will render 
        </p>
      );
    return (
        <Collapse bordered={true}  expandIconPosition='right'
        expandIcon={({ isActive }) => <img src={icon} style={isActive?{
            transform:'rotateX(180deg)',
          
        }:null} />}

        >
        <Panel header="What is Bookmark" key="1" >
          {text}
        </Panel>
        <Panel header="How can I request a new browser" key="2">
          {text}
        </Panel>
        <Panel header="Is there a mobile app" key="3">
          {text}
        </Panel>
      </Collapse>
    )
}

    
export default CollapseComponent

