// src/components/ProductSection.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ProductSection.css'; 
import sec from '../assets/sec.png'
const ProductSection = () => {
  return (
    <Container className="product-section  ">
      <Row>
        <Col md={6} className="product-links test-start">
          <h2 className='text-start'>Our Product</h2>
          <ul className='text-start'>
            <li><a href="#link1">Mac</a></li>
            <li><a href="#link2">Laptops</a></li>
            <li><a href="#link3">Ipads & Tablets</a></li>
            <li><a href="#link4">Desktops & Workstations</a></li>
            <li><a href="#link5">Accessories</a></li>
          </ul>
        </Col>
        <Col md={6} className="product-image">
          <img src={sec} alt="Product" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductSection;
