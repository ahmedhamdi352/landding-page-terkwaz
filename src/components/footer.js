import React, { Component } from 'react'
import '../assests/styles/component/footer.scss';
import { Input } from 'antd';

import logo from '../assests/images/logo-bookmark.svg';
import { NavLink } from "react-router-dom";
import '../assests/styles/component/header.scss'
import facebook from '../assests/images/icon-facebook.svg';
import twitter from '../assests/images/icon-twitter.svg';
import { Formik } from 'formik';
import * as Yup from 'yup'
import errorIcon from '../assests/images/icon-error.svg'
export const Footer = () => {
    return (
        <div className='footer-conteiner'>
           <div>
               <p className='title-footer'>35.000 + ALREADY JOINED</p>
               <p className='sub-title-footer'>Stay up-to-data with what we're doing</p>
           </div>
                <Formik
       initialValues={{ email: '' }}
       validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email format')
          .required('Required'),
      })}
       onSubmit={(values, actions, errors) => {
           console.log(errors)
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
     >
       {props => (
         <form onSubmit={props.handleSubmit}>
        <div className='form-continer'>
            <div className='input-continer'>
           <Input 
            suffix={
               <img src={props.errors.email? errorIcon : null}/>
              }
           placeholder="Basic usage"
            className= {props.errors.email?'input-footer-error' : 'input-footer'}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
            name="email"
            />
           {props.errors.email && <div id="feedback" className='error'>{props.errors.email}</div>}
           </div>
           <button className='btn' type='submit '>More info</button>
        </div>

          
         </form>
       )}
     </Formik>
           
           <div className='sub-footer'>
            <div className= 'footer-item-content'>
           <img src={logo} className='footer-logo'/>
            <NavLink
            className='footer-item'
             to="/"
             activeStyle={{
               
              }}
             exact>
             <p className='footer-item-text'> FEATURES</p>
             </NavLink>
             <NavLink
             className='footer-item'
             to="/"
             activeStyle={{
              }}
             exact>
             <p className='footer-item-text'> PRICING</p>
             </NavLink>
             <NavLink
             className='footer-item'
             to="/"
             activeStyle={{
               
              }}
             exact>
             <p className='footer-item-text'> CONTACT</p>
             </NavLink>
             </div>

             <div className='icon-continer'>
                 <img src={facebook} className='icon-footer'/>
                 <img src= {twitter} className='icon-footer'/>
             </div>
             
           
           </div>
        </div>
    )
}

export default Footer;