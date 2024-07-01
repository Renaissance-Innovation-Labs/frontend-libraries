import React, { useState, useEffect } from 'react';

import Image from 'next/image';

// slide image component
const GallerySlider = ({ array, timeSec = 4000 }) => {
  const [activeImg, setActiveImg] = useState(1);

  useEffect(() => {
    if (activeImg > array?.length) {
      setActiveImg(1);
    }
    const interval = setInterval(() => {
      setActiveImg(activeImg + 1);
    }, timeSec);
    return () => clearInterval(interval);
  }, [activeImg, array?.length]);

  const updateActive = (num) => {
    setActiveImg(num);
  };

  return (
    <div className="max-w-[1000px] mx-auto md:h-[410px] flex gap-1 md:gap-2 mt-8 ">
      {array?.map((slide) => (
        <ImageSlide
          key={slide.id}
          slide={slide}
          updateActive={updateActive}
          activeImg={activeImg}
          alt="Image slide"
        />
      ))}
    </div>
  );
};

// single image componnet
const ImageSlide = ({ slide, updateActive, activeImg }) => {
  return (
    <div
      style={{
        transition: '0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95)',
      }}
      onClick={() => updateActive(slide.id)}
      className={`${
        activeImg === slide?.id
          ? 'h-80 w-4/5 lg:w-[500px] grow-1 animate-slightFade'
          : 'h-80  w-4 md:w-16 lg:w-28 flex-none cursor-pointer'
      } md:h-full  relative rounded-2xl overflow-hidden bg-gray-200`}
    >
      <Image
        src={slide.src}
        alt="about slide"
        fill
        object-fit="cover"
        priority
      />

      {slide?.text && activeImg === slide?.id ? (
        <div className="animate-fadeIn absolute bottom-[10%] text-white p-4">
          <h4 className="font-bold text-xl lg:text-2xl text-white">
            {slide?.text?.header}
          </h4>
          <p className="text-xs text-white">{slide?.text?.sub}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default GallerySlider;
