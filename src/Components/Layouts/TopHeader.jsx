import React from "react";
import {
  EnvelopeSimpleIcon,
  PhoneIcon,
  FacebookLogoIcon,
  XLogoIcon,
  InstagramLogoIcon,
} from "@phosphor-icons/react";

export default function TopHeader() {
  return (
    <div className="w-full relative overflow-hidden">
      
      {/* RIGHT BACKGROUND */}
      <div className="absolute inset-0 bg-[#F2F0EC]" />

      {/* LEFT SLANTED BACKGROUND (PIXEL PERFECT) */}
      <div
        className="absolute top-0 left-0 h-full bg-[#FFAC00] w-[40%]"
        style={{
          
          clipPath: "polygon(0 0, 100% 0, 92% 100%, 0% 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[84px] py-4 flex items-center justify-between">
        
        {/* LEFT CONTENT (LOCKED INSIDE SHAPE) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px] text-white max-w-[700px]">
          
          <div className="flex items-center gap-2">
            <div className="bg-[#1F6B5A] p-2 rounded-full">
              <EnvelopeSimpleIcon size={20} weight="fill" />
            </div>
            <a href="mailto:johat1011953@outlook.com" className="text-sm font-medium">
              johat1011953@outlook.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-[#1F6B5A] p-2 rounded-full -rotate-90">
              <PhoneIcon size={20} weight="fill" />
            </div>
            <a href="tel:+1-231-427-2289" className="text-sm font-medium">
              +1-231-427-2289
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex items-center gap-[13.8px]">
          <div className="bg-[#1F6B5A] p-2 rounded-full text-white">
            <FacebookLogoIcon size={20} />
          </div>
          <div className="bg-[#1F6B5A] p-2 rounded-full text-white">
            <XLogoIcon size={20} />
          </div>
          <div className="bg-[#1F6B5A] p-2 rounded-full text-white">
            <InstagramLogoIcon size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}