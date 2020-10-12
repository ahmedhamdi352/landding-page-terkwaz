import React, {}  from 'react'
import Header from './header'
import Body from './body'
import '../assests/styles/component/home.scss'

export const home = () => {
    return (
        <div className='Root-continer'>
           <Header/>
           <Body/>
        </div>
    )
}



export default home
