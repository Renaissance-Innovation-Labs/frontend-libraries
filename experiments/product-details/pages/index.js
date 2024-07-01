import React from 'react';

import { HProductDetails, ProductDetails } from '../components/ProductDetails';

const Index = () => {
  const someAction = () => {
    console.log('action');
  };

  return (
    <div className="p-4 gap-8">
      <h1 className="fond-bold text-2xl lg:text-4xl text-black mb-8">
        Product Details
      </h1>

      {/* <ProductDetails link href="/" ctaText="Add to cart" /> */}
      <HProductDetails link href="/" ctaText="Order" />
    </div>
  );
};

export default Index;
