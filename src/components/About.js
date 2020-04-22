import React from 'react';
import './About.css'
import Profile from '../images/profile-pic.jpeg'

const About = () => {
  return ( 
    <div className='about-container'>
      <div className='about-left'>
        <div className='profile-container'>
          <img src={Profile} alt='profile' className='profile-pic'></img>
        </div>
      </div>

      <div className='about-right'>
        <div className='about-description one'>Hi, I'm Darci a full stack web developer. I discovered my passion for software development about a year ago. I signed up for a coding bootcamp not knowing how much it would change my life. Since completeing the program, I have been focusing my efforts on front-end development. My goal is to create meaningful and beautiful projects. 
        </div>
        <div className='about-description two'>
          Prior to my software development journey, I attended Florida State University and completed my Bachelor's in Psychology. After college, I worked at a law firm as an administrative assistant for two years. Feel free to contact me at: darcimarie33@gmail.com
        </div>
      </div>
    </div>
   );
}
 
export default About;
