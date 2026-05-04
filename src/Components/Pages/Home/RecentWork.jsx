import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { getWorks, getImageById } from "../../../Api/Api";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RecentWork = () => {
  const [works, setWorks] = useState([]);
  const [images, setImages] = useState({});

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWorks();
        setWorks(data);

        const imgMap = {};

        await Promise.all(
          data.map(async (item) => {
            const id = item?.acf?.image;
            if (id) {
              const url = await getImageById(id);
              imgMap[id] = url;
            }
          })
        );

        setImages(imgMap);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // 🔥 GSAP Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          y: 140,
          opacity: 0,
          scale: 0.96
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.6,
          ease: "expo.out",
          stagger: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,

            start: "top 70%",   // ⬅️ starts ONLY when section is clearly visible
            end: "top 30%",

            toggleActions: "play none none reset",
            // ⬅️ resets if you scroll away (optional but useful)

            once: true,
            // ⬅️ ensures it runs only when user actually reaches it
          }
        }
      )
    }, sectionRef);

    return () => ctx.revert();
  }, [works]);

  return (
    <div ref={sectionRef} className="py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[72px] bg-white">

        {/* Heading */}
        <div className="mb-12">
          <div className="w-10 h-[2px] bg-[#FFAC00]" />
                  <p className="text-md md:text-2xl text-[#FFAC00] italic font-caveat pt-1">
                    Complete Projects
                  </p>
          <div className="flex justify-between items-center">
            <h2 className="text-[32px] lg:text-[50px] leading-[45px] lg:leading-[60px] tracking-[-2px] font-bold text-gray-800 font-display">
              Our Recent Work
            </h2>
            <Link to="/event" className="bg-[#FFAC00] -skew-x-[12deg] px-7 py-2 text-sm md:text-base md:px-12 md:py-4 hover:bg-[#1F6B5A] hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="block skew-x-[12deg] text-white text-sm font-semibold uppercase">
                View All
              </span>
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-[19px]">

          {works.map((item, i) => {
            const imageUrl = images[item.acf?.image];

            return (
              <div
                key={i}
                ref={addToRefs}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <img
                  src={imageUrl}
                  alt=""
                  className="w-full h-[320px] object-cover rounded-2xl transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default RecentWork;