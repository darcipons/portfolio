import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './Navbar.css'

const Navigation = () => {
  return (
    <Navbar expand="lg" className='navbar' fixed='top'>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto nav-links">
          <Nav.Link href="#home" className='link'>Home</Nav.Link>
          <Nav.Link href="#projects" className='link'>Projects</Nav.Link>
          <Nav.Link href="#about" className='link'>About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation 
