/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import '/src/css/component/HomeComp.css'
import homeImg from '../images/homeImg.png'
import { ThemeContext } from '../Pages/Home'

export const HomeComp = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className='homeWrapper' >
        <h1>LEARNIFY</h1>
        <h3 onClick={()=>{alert('hello')}} className='span'> - Where Aspiration Meets Achievement</h3>
        <img src={homeImg} alt='img' className='homeImg'/>
        <div className={themeContext?'getStarted':'getStartedDark'}>
          <span> Get Started</span>
        </div>
    </div>
  )
}
