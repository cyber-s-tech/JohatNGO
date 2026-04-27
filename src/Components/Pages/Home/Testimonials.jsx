import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Quotes } from "@phosphor-icons/react";

import { getTestimonials } from "../../../Api/Api"; // 👈 IMPORT API

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const res = await getTestimonials(); // 👈 API CALL
        setData(res);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading testimonials...</p>;
  }

  return (
    <section className="relative py-35 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://johatngo.ahaanmedia.com/wp-content/uploads/2026/04/Image-3.png')",
        }}
      ></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#F2F2F2] opacity-50"></div>

      <div className="relative max-w-[1440px] mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

        {/* LEFT */}
        <div>
          <p className="relative inline-block text-yellow-500 font-serif italic text-[24px] font-caveat font-bold after:content-[''] after:absolute after:left-0 after:top-0 after:w-1/2 after:border-t-2 after:border-yellow-500">
            Our Testimonials
          </p>

          <h2 className="font-display text-[50px] font-bold leading-tight mb-6 text-black">
            What They’re <br /> Talking About us
          </h2>

          <p className="text-gray-500 max-w-md">
            Our supporters, volunteers, and donors share their experiences and the positive impact our organization has made.
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative">

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-2xl shadow-xl pt-14 pb-8 px-8 relative">

                  {/* PROFILE IMAGE */}
                  <div className="absolute -top-10 left-8">
                    <div className="bg-white p-1 rounded-full shadow-md">
                      <img
                        src={
                          item.featured_image ||
                          "https://via.placeholder.com/80"
                        }
                        alt=""
                        className="w-20 h-20 rounded-full object-cover border-4 border-green-700"
                      />
                    </div>
                  </div>

                  {/* QUOTE ICON */}
                  {item.acf?.quote_icon && (
                    <div className="absolute right-6 top-6 bg-green-700 text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <Quotes size={18} weight="fill" />
                    </div>
                  )}

                  {/* CONTENT */}
                  <div>
                    <h3
                      className="text-xl font-semibold"
                      dangerouslySetInnerHTML={{
                        __html: item.title.rendered,
                      }}
                    />

                    <p className="text-gray-400 text-sm mb-2">
                      {item.acf?.designation}
                    </p>

                    <div className="text-yellow-400 text-lg mb-3">
                      {"★".repeat(item.acf?.rating || 0)}
                    </div>

                    <p
                      className="text-gray-600 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: item.content.rendered,
                      }}
                    />
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;