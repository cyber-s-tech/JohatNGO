import React from 'react';
import { Link } from "react-router-dom";
const CallToAction = () => {
  return (
    <section className="relative h-[400px] md:h-[524px] w-full flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/cta.jpg')`,
          filter: 'grayscale(100%)'
        }}
      />
 
      {/* Content Container */}
      <div className="relative z-10 max-w-4xl px-4 space-y-6">
        <p className="text-gray-300 text-sm md:text-lg md:text-xl font-light">
          We're here to support poor people
        </p>
 
        <h1 className="font-display text-[22px] sm:text-[32px] md:text-[50px] font-bold text-white font-serif leading-tight">
          Your support <span className="relative inline-block">
            helps
           <img
              src="/marker.svg"
              alt=""
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-none h-auto pointer-events-none"            
            />
          </span> us bring <br /> hope and change to <br /> communities in need
        </h1>
 
        {/* Skewed CTA Button */}
        <div className="pt-4 flex justify-center">
           <Link to="/contact">
          <button className="cursor-pointer bg-[#FFAC00] text-white font-bold px-8 py-3 lg:py-4 lg:px-15 uppercase tracking-widest text-xs transition-colors duration-200 transform -skew-x-12">
            <span className="inline-block skew-x-12">Join Now</span>
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
 
export default CallToAction;
 