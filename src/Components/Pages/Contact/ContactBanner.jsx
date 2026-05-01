import React from "react";
import contactbanner from "../../../assets/contactbanner.webp";

const ContactBanner = () => {
  return (
     <div className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <img
        src={contactbanner}
        alt="Contact Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      

      {/* Content */}
      <div className="z-10 relative max-w-[1440px] mx-auto items-center [px-4 md:px-8 lg:px-12 xl:px-490px]">
        <h1 className="text-white text-3xl sm:text-4xl md:text-[80px] leading-snug font-bold font-display">
          Contact Us
        </h1>
      </div>
    </div>
  );
};

export default ContactBanner;