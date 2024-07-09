import './App.css';
import Navbar from '../src/Components/Navbar/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Footer from './Components/Footer/Footer.jsx';
import Shop from './Pages/Shop.jsx';
import  Cart from './Pages/Cart.jsx';
import  Checkout from './Pages/Checkout.jsx';
import { CartProvider } from './Components/context/CartContext.jsx';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/Shop" element={<Shop />} />  
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />        
        </Routes>
        
        <Footer />
      </div>        
      </CartProvider>
  
    </Router>

  );
}

export default App;
