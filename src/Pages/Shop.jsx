import React from 'react';
import HeroSection from '../Components/Hero/Hero';
import ProductList from '../Components/ProductList/ProductList';
import SecondheroSection from '../Components/SecondHero/Secondhero.jsx';
import ProductSection from '../Components/ProductSection/ProductSection.jsx';



const Shop = () => {
  return (
      <>
        <HeroSection/>
        <div className='container text-start'>
          <h1>
            Editor's Picks
          </h1>
          <p>From the best stores and offers</p>
        </div>
        <ProductList/>
        <SecondheroSection/>
        <ProductSection/>
      </>

  );
}

export default Shop;
