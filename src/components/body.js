import React, { } from 'react'
import pic from '../assests/images/illustration-hero.svg'
import '../assests/styles/component/body.scss';
import chrome from '../assests/images/logo-chrome.svg';
import firefox from '../assests/images/logo-firefox.svg';
import opera from '../assests/images/logo-opera.svg'
import Taps from './taps'
import Collapse from './collapse'
import Footer from './footer'
 const Body = () => {
    return (
        <div className='body-content'>
        <div className='body-continer'>
           <div className='text-continer'>
               <p className='text-bold'> A Simple Bookmark Manager</p>
               <p className='text-normal'> A clean and simple interface to organize your favourite websites. 
                   Open a new browser tab and see your sites load instantly. Try it for free.
               </p>
           <div>
               <button className='btn-chrome'>Get it on Chrome</button>
               <button className= 'btn-firefox'>Get it on Firefox</button>
           </div>
           </div>

           <div>
               <img src={pic} className='image'/>

           </div>
        </div>

        <div className='text-features'>
            <p className='text-bold'>Features</p>
            <p className='text-features'> Our aim is to make it quick and easy for you to access your 
                favourite websites. Your bookmark sync between your devices so
                you can access them on the go.
            </p>
        </div>
        <Taps/>

        <div className='text-features'>
            <p className='text-bold'>Download the extension</p>
            <p className='text-features'> We've got more browsers in the pipeline. Please do let us
            know if you've got a favourite you'd like us to prioritize.
            </p>
        </div>

        <div className='continer-extenstions'>
            <div className= 'extention' style={{marginBottom:'50px'}}>
                <img src={chrome} className='extenstion-logo'/>
                <p className='extention-bold'>Add to Chrome</p>
                <p className='text-extention'>Minimum Version 62</p>
                <button className='btn-chrome'>Add & Install Extension</button>
            </div>

            <div className= 'extention' style={{marginTop:'50px'}}>
            <img src={firefox} className='extenstion-logo'/>
                <p className='extention-bold'>Add to Firefox</p>
                <p className='text-extention'>Minimum Version 55</p>
                <button className='btn-chrome'>Add & Install Extension</button>
            </div>

            <div className= 'extention' style={{marginTop:'100px'}}>
            <img src={opera} className='extenstion-logo'/>
                <p className='extention-bold'>Add to Opera</p>
                <p className='text-extention'>Minimum Version 64</p>
                <button className='btn-chrome'>Add & Install Extension</button>
            </div>
        </div>

        <div className='text-features'>
            <p className='text-bold'>Frequently Asked Questions</p>
            <p className='text-features'> Here are some of our FAQs. If you have any other questions
            you'd like answered please feel free to email us.
            </p>
        </div>
        <Collapse/>
        <button className='btn-chrome' style={{margin:'40px 0'}}>More Info</button>
        <Footer/>
        </div>
    )
}

export default Body

