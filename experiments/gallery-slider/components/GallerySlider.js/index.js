import React, { useState, useEffect } from 'react';

import Image from 'next/image';

const ImageSlide = ({ slide, updateActive, activeImg }) => {
  return (
    <div
      style={{
        transition: '0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95)',
      }}
      onClick={() => updateActive(slide.id)}
      className={`${
        activeImg === slide?.id
          ? 'h-80 w-full md:w-[400px] lg:w-[500px] grow-1 animate-slightFade'
          : 'h-32 w-full md:w-16 lg:w-28 flex-none cursor-pointer'
      } md:h-full  relative rounded-2xl overflow-hidden bg-gray-200`}
    >
      <Image src={slide.src} alt="about slide" fill object-fit="cover" />

      {slide?.text && activeImg === slide?.id ? (
        <div className="animate-fadeIn absolute bottom-[10%] text-white p-4">
          <h4 className="font-bold text-2xl">{slide?.text?.header}</h4>
          <p className="text-xs text-offWhite">{slide?.text?.sub}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

const GallerySlider = ({ array }) => {
  const [activeImg, setActiveImg] = useState(1);

  useEffect(() => {
    if (activeImg > array?.length) {
      setActiveImg(1);
    }
    const interval = setInterval(() => {
      setActiveImg(activeImg + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeImg, array?.length]);

  const updateActive = (num) => {
    setActiveImg(num);
  };

  return (
    <div className=" max-w-[1000px] mx-auto md:h-[410px] flex flex-col md:flex-row gap-2 mt-8 ">
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

export default GallerySlider;
