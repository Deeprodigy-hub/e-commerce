// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import timbucloud from '../assets/timbucloud.png'
import facebook from '../assets/facebook.png'
import x from '../assets/x.png'
import insta from '../assets/insta.png'
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-logo-section text-start my-20">
          <img src={timbucloud} alt="Logo" className="footer-logo" />
          <p className="footer-paragraph">Your one-stop tech shop. The biggest personal computing retailer in West Africa</p>
        </div>
        <hr className="footer-line" />
        <Row className='footer-row-section '>
          <Col md={6} className="social-icons text-start ">
            <img src={facebook} alt="Social Icon 1" className="social-icon" />
            <img src={x} alt="Social Icon 2" className="social-icon" />
            <img src={insta}alt="Social Icon 3" className="social-icon" />
          </Col>
          <Col md={6} className="footer-links text-end g-24 j ">
            <a href="#link1" className="footer-link">Terms of Service</a>
            <a href="#link2" className="footer-link">Privacy Policy</a>
            <a href="#link3" className="footer-link">Returns & Refunds</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
