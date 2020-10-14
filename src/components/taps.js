import React from 'react'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import '../assests/styles/component/taps.scss';
import TapBody from './tabBody'
import tapShare from '../assests/images/illustration-features-tab-3.svg'
import tapSearch from '../assests/images/illustration-features-tab-2.svg'
import tapBookmark from '../assests/images/illustration-features-tab-1.svg'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Paragraphes ={
  tapBookmark :{
    "title":" Bookmark on one click",
    "text" :" Organize your bookmarks however you like. our simple drag-and-drop interface gives you complete control over how you manage your favourite sites"
  },
  tapSearch:{
    "title":"Intelligent search",
    "text":"Our powerful search feature will help you find saved sites in on time at all. No need to trawl through all of your bookmarks"
  },
  tapShare :{
    "title":"Share Your bookmarks",
    "text":"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button"
  }
}

const Demo = () => (
  <Tabs defaultActiveKey="1" onChange={callback} className='contnet-flex'>
    <TabPane tab="Simple Bookmarking" key="1" >
        <TapBody image={tapBookmark} Paragraph ={Paragraphes.tapBookmark}/>
    </TabPane>
    <TabPane tab="Speedy Searching" key="2">
    <TapBody image={tapSearch} Paragraph ={Paragraphes.tapSearch}/>
    </TabPane>
    <TabPane tab="Easy Sharing" key="3">
    <TapBody image={tapShare} Paragraph ={Paragraphes.tapShare} />
    </TabPane>
  </Tabs>
);

export default Demo;