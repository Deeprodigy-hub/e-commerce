import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import Secondhero from '../assets/secondhero.png'; 
import './Secondhero.css'

const SecondheroSection = () => {
  return (
    <section className="Secondhero-section" style={{ backgroundImage: `url(${Secondhero})` }}>
      <div className="Secondhero-overlay"></div>
      <Container fluid className="h-100 d-flex flex-column justify-content-end">
        <Row className="align-items-end">
          <Col md={8} className="text-white">
            <div className="Secondhero-content text-start pt-15">
              <p className=""><h1>Get A Custom Office Setup</h1>
              Talk to our team to customize your new workspace.</p>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default SecondheroSection;
