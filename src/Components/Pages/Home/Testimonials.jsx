import { useEffect, useRef, useState } from "react";
import { Quotes, StarIcon } from "@phosphor-icons/react";
import { getTestimonials } from "../../../Api/Api";

const Testimonials = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [index, setIndex] = useState(1);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const res = await getTestimonials();
        setData(res);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  // create infinite loop array
  const extended =
    data.length > 0
      ? [data[data.length - 1], ...data, data[0]]
      : [];

  // autoplay
  useEffect(() => {
    if (data.length === 0) return;

    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearTimeout(timeoutRef.current);
  }, [index, data]);

  // 👉 ADD IT HERE
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  }, [isTransitioning]);

  const handleTransitionEnd = () => {
    if (index === extended.length - 1) {
      setIsTransitioning(false); // ⛔ stop animation
      setIndex(1);
    }

    if (index === 0) {
      setIsTransitioning(false);
      setIndex(extended.length - 2);
    }
  };

  if (loading) {
    return <p className="text-center py-20">Loading testimonials...</p>;
  }

  return (
    <section className="relative py-32 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://johatngo.ahaanmedia.com/wp-content/uploads/2026/04/Image-3.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#F2F2F2]/70"></div>

      {/* CONTENT */}
      <div className="relative max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-20 items-center px-6">

        {/* LEFT SIDE */}
        <div>
          <p className="relative inline-block text-yellow-500 font-caveat text-[24px] font-bold italic mb-4
          after:content-[''] after:absolute after:left-0 after:-top-1 after:w-1/2 after:border-t-2 after:border-yellow-500">
            Our Testimonials
          </p>

          <h2 className="font-display text-[48px] font-bold leading-tight mb-6 text-black">
            What They’re <br /> Talking About us
          </h2>

          <p className="text-gray-500 max-w-md">
            Our supporters, volunteers, and donors share their experiences and the positive impact our organization has made.
          </p>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div className="relative overflow-hidden">

          <div
            className="flex"
            style={{
              transform: `translateX(-${index * 85}%)`,
              transition: isTransitioning ? "transform 700ms ease-in-out" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((item, i) => (
              <div
                key={i}
                className="pt-10 w-full md:w-[65%] lg:w-full xl:w-[85%] pr-6 flex-shrink-0"
              >
                <div className="bg-white rounded-2xl shadow-xl pt-16 px-4 pb-4  md:px-6 md:pb-6 xl:pb-10 xl:px-10 relative">

                  {/* AVATAR (green circle + image offset) */}
                  <div className="absolute -top-10 left-10">
                    <div className="w-[96px] h-[96px] bg-[#1A685B] rounded-full flex items-center justify-center">
                      <img
                        src={
                          item?.featured_image ||
                          "https://via.placeholder.com/80"
                        }
                        alt=""
                        className="mr-2 mt-2 w-[92px] h-[92px] rounded-full object-cover border-4 border-white"
                      />
                    </div>
                  </div>

                  {/* QUOTE ICON */}
                  <div className="absolute right-6 top-6 bg-[#1A685B] text-white w-10 h-10 rounded-full flex items-center justify-center">
                    <Quotes size={24} weight="fill" className="-rotate-180" />
                  </div>

                  {/* TEXT CONTENT */}
                  <div className="mt-4">
                    <h3
                      className="text-xl font-semibold font-display text-[#313131]"
                      dangerouslySetInnerHTML={{
                        __html: item?.title?.rendered || "",
                      }}
                    />

                    <p className="text-[#6F6F6F] text-sm mb-2">
                      {item?.acf?.designation}
                    </p>

                    <div className="flex gap-1 text-lg mb-3">
                      {Array.from({ length: item?.acf?.rating || 0 }).map((_, i) => (
                        <StarIcon key={i} size={20} color="#f3b42c" weight="fill" />
                      ))}
                    </div>

                    <p
                      className="text-[#6F6F6F] text-sm md:text-base leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: item?.content?.rendered || "",
                      }}
                    />
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="flex gap-2 mt-6 pb-2 justify-center">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i + 1)}
                className={`w-2.5 h-2.5 rounded-full transition ${index === i + 1 ? "bg-green-700" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;