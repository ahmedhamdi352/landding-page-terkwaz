import React, { useState } from 'react'
import logo from '../assests/images/logo-bookmark.svg';
import { NavLink } from "react-router-dom";
import '../assests/styles/component/header.scss'
import menu from '../assests/images/icon-hamburger.svg';
import close from '../assests/images/icon-close.svg';
import facebook from '../assests/images/icon-facebook.svg';
import twitter from '../assests/images/icon-twitter.svg';
export const Header = () => {
  const [open,setOpen]=useState(false)

  const handelshow = ()=>{
      console.log(open)
      setOpen(true)
  }

    return (
        <div className='header-continer'>

            <img src={logo} className='logo'/>
            <div className= 'nav-continer'>
            <NavLink
            className='nav-item'
             to="/"
             activeStyle={{
               
              }}
             exact>
             <p className='nav-text'> FEATURES</p>
             </NavLink>
             <NavLink
             className='nav-item'
             to="/"
             activeStyle={{
              }}
             exact>
             <p className='nav-text'> PRICING</p>
             </NavLink>
             <NavLink
             className='nav-item'
             to="/"
             activeStyle={{
               
              }}
             exact>
             <p className='nav-text'> CONTACT</p>
             </NavLink>
             <button className='btn'>LOGIN</button>
             </div>


             <div className= 'menu-continer'>
                 <img src={menu} onClick={handelshow} className='menu-img'/>
                 <div className={open == false?'none':'overlay'} >
                   <div className='menu-image'>
                   <img src={logo} className='logo'/>

                    <img src={close}  onClick={()=>setOpen(false)}/>
                   </div>

                  <div className="overlay-content">
                  <NavLink
            className='nav-item'
             to="/"
             activeStyle={{
               
              }}
             exact>
             <p className='nav-menu-text'> FEATURES</p>
             </NavLink>
             <NavLink
             className='nav-item'
             to="/"
             activeStyle={{
              }}
             exact>
             <p className='nav-menu-text'> PRICING</p>
             </NavLink>
             <NavLink
             className='nav-item'
             to="/"
             activeStyle={{
               
              }}
             exact>
             <p className='nav-menu-text'> CONTACT</p>
             </NavLink>
             <button className='btn'>LOGIN</button>
                  </div>

                  <div className='icon-continer' style={{marginTop:'65%'}}>
                    <img src={facebook} className='icon-footer'/>
                    <img src= {twitter} className='icon-footer'/>
                   </div>
                 </div>
             </div>

        </div>

    )
}



export default Header
