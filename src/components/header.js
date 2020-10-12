import React, { Component } from 'react'
import logo from '../assests/images/logo-bookmark.svg';
import { NavLink } from "react-router-dom";
import '../assests/styles/component/header.scss'
export const Header = () => {
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

        </div>
    )
}



export default Header
