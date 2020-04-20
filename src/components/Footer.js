import React from 'react'; 
import Linkedin from '../images/linkedin.png'
import Github from '../images/github_black.png'
import './Footer.css'

const Contact = () => {

  return (
    <footer>
    <div className="contact">
      <div className="contact_me">Contact Me!</div>
      <div className="icon_container">
          <a href="https://www.linkedin.com/in/darci-pons/" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="linked in icon" className="icons"/>
          </a>
          <a href="https://github.com/darcipons" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="github icon" className="icons"/>
          </a>
      </div>
    </div>
    </footer>
  )
}

export default Contact
