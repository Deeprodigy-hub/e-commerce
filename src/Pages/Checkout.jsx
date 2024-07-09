
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const CheckoutPage = () => {
  return (
    <Container>
      <Row>
        {/* Column 1: Personal Details */}
        <Col md={8} className="p-3 shadow-sm text-start">
          <h2>Personal Details</h2>
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Group className="mb-3" controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group className="mb-3" controlId="phoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" />
                </Form.Group>
              </Col>

            </Row>
            <Col>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
              </Col>
            <Form.Group className="mb-3" controlId="companyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="streetAddress">
              <Form.Label>Street Address</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Row className="mb-3">
              <Col>
                <Form.Group className="mb-3" controlId="townCity">
                  <Form.Label>Town/City</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="zipcode">
                  <Form.Label>Postcode/ZIP</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>

        {/* Column 2: Order Summary and Payment */}
        <Col md={4} className="p-3 shadow-sm text-start">
          <h2>Order Summary</h2>
          <div className="mb-3">
            <p>Item 1 details</p>
            <p>Item 2 details</p>
          </div>
          <hr />
          <p>Total from Cart: $123.45</p>
          
          <Form className="mb-3">
            <h3>Your Card Details</h3>
            <Form.Group controlId="cardNumber" className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control type="text" />
                <i className="bi bi-credit-card-fill ms-2"></i>
              </div>
            </Form.Group>
            <Row className="mb-3">
              <Col>
              <Form.Group controlId="securityCode" className="mb-3">
              <Form.Label>Security Code</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="expiration">
                  <Form.Label>Expiration</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>



            <Form.Group controlId="termsConditions" className="mb-3">
              <Form.Check
                type="checkbox"
                label="I agree to the terms and conditions"
              />
            </Form.Group>

            <Button variant="warning" className="btn-block rounded-pill">
              Proceed to Payment
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
