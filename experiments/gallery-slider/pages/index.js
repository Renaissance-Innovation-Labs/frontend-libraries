import React from 'react';
import GallerySlider from '../components/GallerySlider.js';
import { slideArr } from '../components/GallerySlider.js/data.js';
const Index = () => {
  return (
    <div className="py-10 px-4">
      <h1 className="text-2xl lg:text-4xl font-bold text-center mb-8">
        Responsive Animated Gallery Slider
      </h1>
      <GallerySlider array={slideArr} timeSec={7000} />
    </div>
  );
};

export default Index;
