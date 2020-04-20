import React from 'react'
import HomePic from '../images/home-pic.png'
import './Home.css'

function Home () {
  return(
    <div className='home-container'>
      <div className='home-left'>
        <div className='home-left-sub'>
          <div className='home-title'>Hi, I'm Darci Pons!</div>
          <div className='home-description'>I'm a Software Developer in Miami, FL.</div>
          <div className='home-description'>Take a look at my projects.</div>
        </div>
      </div>

      <div className='home-right'>
        <div className='home-pic-container'>
          <img src={HomePic} alt='Illustration from Icons8 Ouch' className='illustration'></img>
        </div>
      </div>
    </div>
  )
}

export default Home
