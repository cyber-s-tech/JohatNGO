import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bannerhome from "../../../assets/bannerhome.webp";

const slides = [
  {
    image: bannerhome,
    subtitle: "Welcome to Johat Charitable Trust",
    title: ["Together", "We Can Help", "Those in Need"],
    desc: ["Join us in making a difference by supporting communities, through food, education, and healthcare."],
  },
  {
    image: bannerhome,
    subtitle: "Welcome to Johat Charitable Trust",
    title: ["Together", "We Can Help", "Those in Need"],
    desc: ["Join us in making a difference by supporting communities, through food, education, and healthcare."],
  },
  {
    image: bannerhome,
    subtitle: "Welcome to Johat Charitable Trust",
    title: ["Together", "We Can Help", "Those in Need"],
    desc: ["Join us in making a difference by supporting communities, through food, education, and healthcare."],
  },
];

export default function Homebanner() {
  // 🔥 create cloned slides
  const extendedSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ];

  const [current, setCurrent] = useState(1);
  const [transition, setTransition] = useState(true);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // loop fix
  useEffect(() => {
    if (current === extendedSlides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 700);
    }

    if (current === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(slides.length);
      }, 700);
    }
  }, [current]);

  // re-enable transition
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => {
        setTransition(true);
      });
    }
  }, [transition]);

  return (
    <div className="w-full h-[400px] md:h-[650px] lg:h-[809px] relative overflow-hidden">

      {/* SLIDER TRACK */}
      <div
        className={`flex h-full will-change-transform ${
          transition ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">

            {/* BACKGROUND IMAGE */}
            <img
              src={slide.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* GREEN SHAPE */}
            <div
              className="
                absolute -top-4 left-0 h-[909px] bg-[#1A685B]
                w-[66%] sm:w-[72%] lg:w-[55%] xl:w-[44%]
              "
              style={{
    clipPath: "polygon(0% 0%, 100% 0%, 66% 100%, 0% 100%)",
  }}
            />

            {/* CONTENT */}
            <div className="relative max-w-[1440px] mx-auto h-full flex items-center px-4 md:px-8 lg:px-12 xl:px-[72px]">
              <div className="text-white xl:py-[150px]">

                {/* SUBTITLE */}
                <div className="flex flex-col items-start gap-3 mb-2">
                  <div className="w-10 h-[2px] bg-[#FFAC00]" />
                  <p className="text-md md:text-2xl text-[#FFAC00] italic font-caveat">
                    {slide.subtitle}
                  </p>
                </div>

                {/* TITLE */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-[900] leading-snug mb-4 max-w-[500px] font-display">
                  {slide.title.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h1>

                {/* DESCRIPTION */}
                <p className="text-xs sm:text-sm md:text-xl leading-snug text-white mb-12 max-w-[650px]">
                  {slide.desc.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>

                {/* BUTTON */}
                <Link to="/contact">
                <button className="cursor-pointer bg-[#FFAC00] -skew-x-[12deg] px-7 py-2 text-sm md:text-base md:px-9 md:py-4 hover:scale-110 transition-all duration-300">
                  <span className="block skew-x-[12deg] text-white text-sm font-semibold uppercase">
                    Contact Now
                  </span>
                </button>
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i + 1)}
            className={`w-3 h-3 rounded-full ${
              current === i + 1 ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}