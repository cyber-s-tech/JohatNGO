import React from "react";
import foot from "../../assets/footer_background.png";
import logo from "../../assets/johat_logo.png";
import { FacebookLogo, InstagramLogo, XLogoIcon, PinterestLogo } from "@phosphor-icons/react";
import { MapPinIcon, Phone, EnvelopeSimpleOpenIcon } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer
      className="w-full bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${foot})` }}
    >
      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-[20px] xl:px-[78px] pt-[81px] pb-[42px]">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-12 xl:gap-x-[100px]">

          {/* 1st Column */}
          <div>
            <img src={logo} alt="logo" className="mb-4" />

            <p className="text-[16px] font-medium leading-[26px] text-white max-w-[280px]">
              Discover the inspiring stories of individuals and communities
              transformed by our programs.
            </p>
          </div>

          {/* 2nd Column */}
          <div>
            <div className="flex items-center gap-3 mb-[29px]">
              <h3 className="text-[22px] font-extrabold font-display">
                Quick Links
              </h3>

              {/* Animated Line */}
              <span className="relative w-[29px] h-[2px] bg-[#3a3a3a] overflow-hidden">
                <span className="absolute left-[-100%] top-0 w-full h-full bg-[#FFAC00] animate-slide"></span>
              </span>
            </div>

            <ul className="space-y-[20px]">
              {["Home", "About Us", "Our Work", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-[16px] font-medium transition-all duration-300 hover:translate-x-[6px] inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3rd Column */}
          <div>
            <div className="flex items-center gap-3 mb-[29px]">
              <h3 className="text-[22px] font-extrabold font-display">
                Non Profit
              </h3>

              {/* Animated Line */}
              <span className="relative w-[29px] h-[2px] bg-[#3a3a3a] overflow-hidden">
                <span className="absolute left-[-100%] top-0 w-full h-full bg-[#FFAC00] animate-slide"></span>
              </span>
            </div>

            <ul className="space-y-[20px]">
              {[
                "Food Donation",
                "Medical & Treatment",
                "Education & Donation",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-[16px] font-medium transition-all duration-300 hover:translate-x-[6px] inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4th Column */}
          <div>
            <div className="flex items-center gap-3 mb-[29px]">
              <h3 className="text-[22px] font-extrabold font-display">
                Contact
              </h3>

              {/* Animated Line */}
              <span className="relative w-[29px] h-[2px] bg-[#3a3a3a] overflow-hidden">
                <span className="absolute left-[-100%] top-0 w-full h-full bg-[#FFAC00] animate-slide"></span>
              </span>
            </div>

            <ul className="space-y-[20px]">

              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPinIcon size={45} weight="regular" className="text-[#FFAC00] mt-[1px]" />

                <a
                  href="https://maps.app.goo.gl/2kmyUZe9Ac4b7R2z8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] font-medium leading-[24px] hover:translate-x-[6px] transition inline-block"
                >
                  3975 Purverwoods Rd, Williamsburg, MI 49690, USA
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3">
                <Phone size={28} weight="regular" className="text-[#FFAC00] mt-[3px]" />

                <div className="flex flex-col gap-[6px]">
                  <a
                    href="tel:+12314272289"
                    className="text-[16px] font-medium hover:translate-x-[6px] transition inline-block"
                  >
                    +1-231-427-2289
                  </a>

                  <a
                    href="tel:+12314596853"
                    className="text-[16px] font-medium hover:translate-x-[6px] transition inline-block"
                  >
                    +1-231-459-6853
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <EnvelopeSimpleOpenIcon size={28} weight="regular" className="text-[#FFAC00] shrink-0" />
                <a
                  href="mailto:johat101953@outlook.com"
                  className="text-[16px] font-medium hover:translate-x-[6px] transition inline-block"
                >
                  johat101953@outlook.com
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-[60px] mb-[42px] flex justify-center">
          <div className="w-full max-w-[1170px] bg-[#232323] rounded-[10px] px-[20px] xl:px-[30px] h-auto md:h-[100px] py-4 md:py-0 flex flex-col md:flex-row items-center justify-between">         {/* Left Text */}
            <p className="text-[15px] text-[#898989] text-center md:text-left">
              © Copyright Year{" "}
              <span className="text-[#FFAC00]">
                Johat Charitable Trust
              </span>
              . All Rights Reserved by{" "}
              <a
                href="https://ahaansoftware.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFAC00]"
              >
                Ahaan Software Consulting
              </a>
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 md:mt-0">

              {/* Twitter */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FFAC00] flex items-center justify-center hover:scale-110 transition"
              >
                <XLogoIcon size={20} weight="regular" className="text-white" />
              </a>

              {/* Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FFAC00] flex items-center justify-center hover:scale-110 transition"
              >
                <FacebookLogo size={20} weight="regular" className="text-white" />
              </a>


              {/* Pinterest */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FFAC00] flex items-center justify-center hover:scale-110 transition"
              >
                <PinterestLogo size={20} weight="regular" className="text-white" />
              </a>

              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FFAC00] flex items-center justify-center hover:scale-110 transition"
              >
                <InstagramLogo size={20} weight="regular" className="text-white" />
              </a>

            </div>

          </div>
        </div>

      </div>

      {/* Animation Style */}
      <style>
        {`
          @keyframes slide {
            0% { left: -100%; }
            100% { left: 100%; }
          }
          .animate-slide {
            animation: slide 2s linear infinite;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;