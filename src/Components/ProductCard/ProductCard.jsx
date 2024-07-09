// src/components/ProductCard.js
import React, { useContext } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ image, name, description, cost }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ image, name, description, cost });
  };

  return (
    <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
      <Card className="h-100 custom-card">
        <div className="card-image-container">
          <Card.Img className="custom-card-img" src={image} />
        </div>
        <Card.Body className="d-flex flex-column justify-content-between text-start">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold">${cost}</span>
            <Button onClick={handleAddToCart} className="custom-button rounded-pill fw-semibold">
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
