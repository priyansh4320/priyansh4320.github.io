import React from 'react';
import './AboutMe.css';
import {Navigate, useNavigate} from 'react-router-dom';
export default function AboutMe() {
        const Navigate = useNavigate();
        function handleclick(){
            Navigate('/Project')
        }
  return (
    <div className='about-container'>
        <h1>{""}AboutMe{""}</h1>
        <div className='about-container-parent'>

            <div className='about-parent'>
                <div className='about-info-parent'>
                
                    <div className='about-image'>
                    </div>
                    <div className='about-information'>
                        <p className='description'>
                            I am a Dependable and Enthusiastic person who is great at time management.
                            
                            I am always ready to upgrade myself by learning something new every day. I use a Creative approach to problem solve. 
                            
                            I AM EXCITED TO WORK WITH YOU.

                        </p>
                        <h2>Education</h2>

                        <h3 className='about-college'>Prof. Ram Meghe College of Engineering and Management,Amravati</h3>
                            <p className='about-degree'>Bachelor of Computer Science and Engineering</p>
                            <p className='about-grad'>Aug / 2024 - Will Graduate</p>
                
                        <h3 className='about-college'>Y.B. Patil Polytechnic, Pune</h3>
                            <p className='about-degree'>Diploma in Computer Engineering</p>
                            <p className='about-grad'>June / 2021 - Graduated</p>
                
                        <h2>Skills</h2>
                        <p className='skill'>Language: C, python, javascript, jsx, css, MySql</p>
                        <p className='skill'>Software: VS Code, Pycharm, Github, Jupyter Notebook </p>
                        <p className='skill'>Tech:Data Analytics, Data Science, Data Visualization</p>
                        <p className='skill'>Also Familier:Feature Engineering, Data Cleaning</p>
                        <p className='skill'>Corporate: Problem solving, Communication</p>

                    </div>

                </div>
            </div>
        
        </div>
        <a   onClick={handleclick}>
            <button className='project-btn' >View My Projects.</button>
        </a>
        
    </div>
  )

}
