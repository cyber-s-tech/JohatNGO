import React, { useEffect, useState, useRef } from "react";
import { getWorks, getImageById } from "../../../Api/Api";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AllEventWork = () => {
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

  // 🔥 Same GSAP Animation
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
            start: "top 70%",
            end: "top 30%",
            toggleActions: "play none none reset",
            once: true,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [works]);

  return (
    <div ref={sectionRef} className="py-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[72px]">

        {/* ONLY GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-[19px]">
          {works.map((item, i) => {
            const imageUrl = images[item.acf?.image];

            return (
              <div
                key={i}
                ref={addToRefs}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={imageUrl}
                  alt=""
                  className="w-full h-auto xl:h-[320px] object-cover rounded-2xl transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default AllEventWork;