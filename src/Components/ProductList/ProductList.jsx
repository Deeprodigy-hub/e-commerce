// src/components/ProductList.jsx
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import productImage1 from '../assets/img1.png';
import productImage2 from '../assets/img2.png';
import productImage3 from '../assets/img3.png';
import productImage4 from '../assets/img4.png';
import productImage5 from '../assets/img5.png';
import productImage6 from '../assets/img6.png'; 

const products = [
  { id: 1, image: productImage1, name: 'Dell UltraSharp 38" 1600p Curved Monitor', description: '#DEU3824DW • MFR #U3824DW', cost: 1041.73, count:3 },
  { id: 2, image: productImage2, name: 'Dell UltraSharp 39.7" 2160p HDR 120 Hz Curved Thunderbolt Hub Monitor', description: 'Description of product 2', cost: 1829.99, count:3},
  { id: 3, image: productImage3, name: 'Apple 24" iMac with M3 Chip (Silver)', description: 'Description of product 3', cost: 2299.00, count:3},
  { id: 4, image: productImage4, name: 'Apple Mac mini (M2 Pro)', description: 'Description of product 4', cost: 1499.00, count:3 },
  { id: 5, image: productImage5, name: 'SanDisk 4TB Extreme Portable SSD V2 (Black)', description: 'Description of product 5', cost: 299.99, count:3 },
  { id: 6, image: productImage6, name: 'Apple 16" MacBook Pro (M3 Pro, Space Black)', description: 'Description of product 6', cost: 2499.00, count:3 },
];

const ProductList = () => {
  return (
    <Container>
      <Row>
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            cost={product.cost}
            count={product.count}
          />
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
