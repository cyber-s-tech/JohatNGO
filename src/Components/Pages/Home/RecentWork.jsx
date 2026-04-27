import React, { useEffect, useState } from "react";
import { getWorks, getImageById } from "../../../Api/Api";

const RecentWork = () => {
  const [works, setWorks] = useState([]);
  const [images, setImages] = useState({});

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

  return (
    <div className="py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[72px] bg-white">

        {/* 🔥 Heading */}
        <div className="mb-12">
          <p className="relative inline-block text-yellow-500 font-serif italic text-[24px] font-caveat font-bold after:content-[''] after:absolute after:left-0 after:top-0 after:w-1/2 after:border-t-2 after:border-yellow-500">
            Complete Projects
          </p>

          <h2 className="text-[50px] font-bold text-gray-800 font-display">
            Our Recent Work
          </h2>
        </div>

        {/* 🔥 Grid */}
        <div className="grid md:grid-cols-3 gap-[19px]">

          {works.map((item, i) => {
            const imageUrl = images[item.acf?.image];

            return (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <img
                  src={imageUrl}
                  alt=""
                  className="w-full h-[320px] object-cover rounded-2xl transition duration-500 group-hover:scale-105"
                />

                {/* Overlay (optional but pro) */}
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