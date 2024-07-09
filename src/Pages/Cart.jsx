import React, { useContext } from 'react';
import { CartContext } from '../Components/context/CartContext';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../Components/Cartpg/Cart.css';

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleIncrement = (index) => {
    const newCart = [...cart];
    if (newCart[index] && newCart[index].count) {
      newCart[index] = { ...newCart[index], count: newCart[index].count + 1 };
      setCart(newCart);
    }
  };

  const handleDecrement = (index) => {
    const newCart = [...cart];
    if (newCart[index] && newCart[index].count > 1) {
      newCart[index] = { ...newCart[index], count: newCart[index].count - 1 };
      setCart(newCart);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + (Number(product.cost) * Number(product.count)), 0);
  };

  const handleProceedToPayment = () => {
    navigate('/checkout'); // Navigate to the checkout page
  };

  return (
    <div className="container">
      <Row className='cart-row'>
        {/* Column 1: Added Cards */}
        <h2 className='text-start'>Cart</h2>
        <p className='text-start'>Total Items</p>
        <Col md={8} className="mb-4">
          {cart.map((product, index) => (
            <Card key={index} className="cart-item mb-3">
              <Row className="g-0">
                <Col md={4}>
                  <div className="image-div">
                    <Card.Img src={product.image} className="w-100" />
                  </div>
                </Col>
                <Col md={8} className="d-flex flex-column justify-content-between">
                  <div className="d-flex justify-content-between">
                    <div className="description-div">
                      <h5>{product.name}</h5>
                      <p>{product.description}</p>
                    </div>
                    <div className="remove-cost-div d-flex flex-column align-items-end">
                      <Button
                        onClick={() => handleRemoveFromCart(index)}
                        className="btn-remov btn-sm btn-outline-secondary btn-no-color"
                      >
                        Remove
                      </Button>
                      <span className="fw-bold">${Number(product.cost)}</span>
                    </div>
                  </div>
                  <div className="button-div d-flex align-items-center justify-content-center mt-2">
                    <Button className="btn-mlt btn-sm btn-outline-secondary btn-no-color" onClick={() => handleDecrement(index)}>-</Button>
                    <span className="mx-2">{product.count}</span>
                    <Button className="btn-mlt btn-sm btn-outline-secondary btn-no-color" onClick={() => handleIncrement(index)}>+</Button>
                  </div>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>

        {/* Column 2: Order Summary */}
        <Col md={4} className="mb-4 summary-section">
          <h2>Order Summary</h2>
          <p>Items in Cart: {cart.length}</p>
          <hr />
          <p>Total: <span className="fw-bold">${calculateTotal()}</span></p>
          <Button
            className="btn btn-warning w-100 rounded-pill"
            onClick={handleProceedToPayment}
          >
            Proceed to Payment
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
