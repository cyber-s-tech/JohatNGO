import React, { useEffect, useState } from "react";
import { getServices, getImageById } from "../../../Api/Api";

const Service = () => {
  const [services, setServices] = useState([]);
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);

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
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // 🎨 Gradient mapping (exact tone)
 const getGradient = (color) => {
  switch (color) {
    case "green":
      return "from-teal-400 via-teal-500 to-transparent";
    case "yellow":
      return "from-yellow-400 via-orange-400 to-transparent";
    case "teal":
      return "from-green-400 via-teal-500 to-transparent";
    default:
      return "from-gray-300 to-transparent";
  }
};
  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-semibold">
        Loading Services...
      </div>
    );
  }

  return (
<div className="py-24 bg-gray-100">
  <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[72px] grid md:grid-cols-3 gap-[96px]">

    {services.map((item, i) => {
      const acf = item.acf;
      const imageUrl = images[acf?.image];

      return (
        <div key={i} className="relative">

          {/* 🔥 GRADIENT BORDER (thin & soft) */}
          <div
            className={`p-[15px] rounded-2xl bg-gradient-to-b ${getGradient(
              acf?.color
            )}`}
          >

            {/* 🔥 INNER CARD */}
            <div className="bg-white rounded-2xl pt-20 pb-12 px-8 text-center relative shadow-sm">

              {/* 🔵 IMAGE (perfect overlap) */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                <div className="bg-white  rounded-full shadow-md">
                  <img
                    src={imageUrl}
                    alt=""
                    className="w-30 h-30 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* 🧠 TITLE */}
              <h3
                className="text-[22px] font-bold  text-gray-800 mb-3 leading-snug font-display"
                dangerouslySetInnerHTML={{
                  __html: item.title.rendered,
                }}
              />

              {/* 📄 DESCRIPTION */}
              <p className="text-gray-500 text-[14px] leading-6 px-2">
                {acf?.description}
              </p>

              {/* ➡️ BUTTON */}
              <div className="mt-8 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shadow-sm">
                  →
                </div>
              </div>

              {/* 🔥 BOTTOM FADE (important) */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-100/80 to-transparent rounded-b-2xl pointer-events-none"></div>

            </div>
          </div>
        </div>
      );
    })}

  </div>
</div>
  );
};

export default Service;