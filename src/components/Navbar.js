import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function NavBar (){
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/' >Keep The Childrens Dream</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/' >Home</Nav.Link>
              <Nav.Link as={Link} to='/projects' >Projects</Nav.Link>
              <Nav.Link as={Link} to='/news' >News</Nav.Link>
              <Nav.Link as={Link} to='/gallery' >Gallery</Nav.Link>
              <Nav.Link as={Link} to='/contact' >Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar