import React, { useState } from 'react'
import logo from '../assests/images/logo-bookmark.svg';
import { NavLink } from "react-router-dom";
import '../assests/styles/component/header.scss'
import menu from '../assests/images/icon-hamburger.svg'
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


             {/* <div id="myNav" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <div class="overlay-content">
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
</div> */}
             <div className= 'menu-continer'>
                 <img src={menu} onClick={handelshow}/>
                 <div style={open == false? {display:'none'}:{display:"flex"}}>
                  <a href="#" onClick={()=>setOpen(false)}>About</a>
                  <a href="#">Services</a>
                  <a href="#">Clients</a>
                  <a href="#">Contact</a>
                 </div>
             </div>

        </div>
//         <>
        
// <div class="topnav" id="myTopnav">
//   <a href="#home" class="active">Home</a>
//   <a href="#news">News</a>
//   <a href="#contact">Contact</a>
//   <div class="dropdown">
//     <button class="dropbtn">Dropdown 
//       <i class="fa fa-caret-down"></i>
//     </button>
//     <div class="dropdown-content">
//       <a href="#">Link 1</a>
//       <a href="#">Link 2</a>
//       <a href="#">Link 3</a>
//     </div>
//   </div> 
//   <a href="#about">About</a>
//   <a href="javascript:void(0);" style={{fontSize:'15px'}} class="icon" onclick={myFunction}>&#9776;</a>
// </div>


//         </>
    )
}



export default Header
