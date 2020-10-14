import Paragraph from 'antd/lib/skeleton/Paragraph';
import React, { Component } from 'react'
import pic from '../assests/images/illustration-features-tab-1.svg'
import '../assests/styles/component/body.scss';
const  TabBody = ({image, Paragraph})=> {
        return (
            <div className='body-content' style={{marginTop:'50px'}}>

            <div className='body-tab-continer'>
               <div className='image-feature-continer'>
                   <img src={image} className='image-feature'/>
    
               </div>

               <div className='text-feature-continer' >
                      <p className='text-bold'> {Paragraph.title}</p>
                   <p className='text-normal'>{Paragraph.text}</p>
               <div>
                   <button className='btn-chrome'>More info</button>
               </div>
               </div>
    
            </div>

            </div>

            
        )
    
}

export default TabBody