import { useEffect, useState } from "react";
import { getWhatWeDo } from "../../../Api/Api";
import DonationPopupForm from "./DonationPopupForm";

const WhatWeDo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    getWhatWeDo()
      .then((res) => setData(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const handleOpen = (title) => {
    setSelectedService(title);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedService("");
  };

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
    <section className="bg-[#F6F3EA] py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[72px] text-center">

        {/* Heading */}
        
        <p className="relative inline-block text-[#FFAC00] text-lg sm:text-xl md:text-[22px] font-caveat font-bold after:content-[''] after:absolute after:left-0 after:top-0 after:w-1/2 after:border-t-2 after:border-yellow-500 pt-2">
          What We Do
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-10 sm:mb-12 lg:mb-14 font-display leading-tight">
          Helping Lives, Creating Hope.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {data.map((item, index) => {
            const title = item.title.rendered;
            const desc = item.content.rendered;
            const btn = item.acf?.button_text;
            const image =
              item._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            return (
              <div
                key={index}
                className="
                bg-[#f1ede7] rounded-2xl 
                p-4
                flex flex-col lg:flex-row 
                items-center
                gap-4 lg:gap-6 
                border border-[#D7D7D7] 
                shadow-[0_2px_8px_rgba(0,0,0,0.05)]
                "
              >
                {/* Image */}
                <img
                  src={image}
                  alt={title}
                  className="
                  w-full 
                  h-[220px] sm:h-[260px] 
                  lg:w-[240px] 
                  lg:h-[260px] 
                  object-cover rounded-xl flex-shrink-0
                  "
                />

                {/* Content */}
                <div className="flex flex-col justify-center w-full text-left">

                  <h3
                    className="text-lg sm:text-xl lg:text-[22px] font-bold text-gray-800 mb-2 font-display leading-snug"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />

                  <p
                    className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: desc }}
                  />

                  <button
                    onClick={() => handleOpen(title)}
                    className="relative inline-block  cursor-pointer w-fit bg-[#FFAC00] -skew-x-[12deg] px-5 py-2 text-sm md:text-base hover:bg-[#1F6B5A] hover:scale-110 transition-all duration-300">
                  <span className="block skew-x-[12deg] text-white text-sm font-semibold uppercase">
                    {btn?.trim() ? btn : "Donate Now"}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        <DonationPopupForm
          isOpen={openModal}
          onClose={handleClose}
          service={selectedService}
        />
      </div>
    </section>
  );
};

export default WhatWeDo;