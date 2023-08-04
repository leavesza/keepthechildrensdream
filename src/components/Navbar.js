import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';

const NavBar =()=>{
    return(
        <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to='/' >Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/' >HOME</Nav.Link>
              <Nav.Link as={Link} to='/projects' >PROJECTS</Nav.Link>
              <Nav.Link as={Link} to='/news' >NEWS</Nav.Link>
              <Nav.Link as={Link} to='/gallery' >GALLERY</Nav.Link>
              <Nav.Link as={Link} to='/contact' >CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default NavBar;
