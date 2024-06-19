import React from 'react';
import GallerySlider from '../components/GallerySlider.js';
import { slideArr } from '../components/GallerySlider.js/data.js';
const Index = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Responsive Gallery Slider
      </h1>
      <GallerySlider array={slideArr} />
    </div>
  );
};

export default Index;
