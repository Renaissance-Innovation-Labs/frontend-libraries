import React from 'react';

import { ProductDetails } from '../components/ProductDetails';

const Index = () => {
  return (
    <div className="p-4 gap-8">
      <h1 className="fond-bold text-2xl lg:text-4xl text-black mb-8">
        Product Details
      </h1>

      <ProductDetails link href="/" ctaText="Order" changeView />
    </div>
  );
};

export default Index;
