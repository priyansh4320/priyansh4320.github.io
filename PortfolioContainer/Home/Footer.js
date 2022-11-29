import React from 'react';
import './Footer.css';
export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <div className='image'/>
            <img src={require ('../../../assets/Home/shape-bg.png').default} alt='no internet connection'/>
        </div>
    </div>
  )
}
