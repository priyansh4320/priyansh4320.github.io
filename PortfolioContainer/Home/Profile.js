import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                  <div className='cloz-icon'>

                    <a href='https://www.facebook.com/priyanshu.deshmukh.7/'>
                      <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='#'>
                      <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='https://www.instagram.com/priyansh_4320/'>
                      <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://www.youtube.com/channel/UCd7ZK181ryuKBkHDqQtfpYQ'>
                      <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='#'>
                      <i className='fa fa-twitter'></i>
                    </a>

                  </div>

                </div>
            
        
            <div className='profile-details-name'>
                <span className='primary-text'>
                  {''}
                  Namaste, I'm <span className='highlighted-text'> Priyanshu. </span>
                </span>
            </div>
            <div className='profile-details-role'>
              <span className='primary-text'>
                    {''}
                    <h1>
                      {' '}
                      <Typical
                        loop = {Infinity}
                        steps = {[
                          "Enthusiastic Dev 💻",
                          1000,
                          "Data Scientist 💾",
                          1000,
                          "Data Analyst 📈",
                          1000,
                          "Software Devloper 👩‍💻",
                          1000,
                        ]}
                      />
                    </h1>
                    <span className='profile-role-tagline'>
                      Knack for building a Machine Learning Model for Huge Data , perform Data Analysis and Build Frontend and Backend Softwares 
                    </span>
              </span>
            </div>
              
                <div className='profile-options'>
                        <button className='btn primary-btn'>
                          {""}
                          Hire Me.{""}
                        </button>
                        <a href='priyanshu resume.pdf' download='priyanshu.pdf'>
                          <button className='btn highlighted-btn'>Get Resume.</button>
                        </a>
                </div>          
          </div>
                        <div className='profile-picture'>
                           <div className='profile-picture-background'></div>
                        </div>
        </div>

    </div>
  )
}
