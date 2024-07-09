import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import hero from '../assets/hero.png'; 
import './Hero.css'

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${hero})` }}>
      <div className="hero-overlay"></div>
      <Container fluid className="h-100 d-flex flex-column justify-content-end">
        <Row className="align-items-end">
          <Col md={6} className="text-white">
            <div className="hero-content text-start">
              <p className="mb-4"><h1 className="mb-4 text-left pe-10">Autumn Column</h1>
              Get the latest tech products at CRAZY discount prices.</p>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-end pe-5 mt-md-0 mt-3">
            <Button variant="light" size="lg" className="rounded-pill">Buy Now</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
