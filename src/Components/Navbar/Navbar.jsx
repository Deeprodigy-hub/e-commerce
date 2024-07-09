import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import timbucloud from '../assets/timbucloud.png';
import cart from '../assets/cart.png';
import './Navbar.css'; 

function CustomNavbar() {
  return (
    <Navbar bg="custom" expand="lg" className="custom-navbar">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={timbucloud}
            width="75%"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/Shop">Shop</Nav.Link>
            <Nav.Link href="#link1">Laptops</Nav.Link>
            <Nav.Link href="#link2">Ipads & Tablets</Nav.Link>
            <Nav.Link href="#link3">Desktops & Workstations</Nav.Link>
            <Nav.Link href="#link4">Accessories</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/Cart ">
              <img
                src={cart}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Cart"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
