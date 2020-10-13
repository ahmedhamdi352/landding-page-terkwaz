import React, { Component } from 'react'
import pic from '../assests/images/illustration-features-tab-1.svg'
import '../assests/styles/component/body.scss';
const  TabBody = ()=> {
        return (
            <div className='body-content' style={{marginTop:'50px'}}>

            <div className='body-continer'>
               <div className='image-feature-continer'>
                   <img src={pic} className='image-feature'/>
    
               </div>

               <div className='text-feature-continer' >
                   <p className='text-bold'>  Bookmark on one click</p>
                   <p className='text-normal'> Organize your bookmarks however you like. our simple
                   drag-and-drop interface gives you complete control over how you manage your favourite sites
                    </p>
               <div>
                   <button className='btn-chrome'>More info</button>
               </div>
               </div>
    
            </div>

            </div>

            
        )
    
}

export default TabBody