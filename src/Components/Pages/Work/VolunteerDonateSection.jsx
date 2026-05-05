import React, { useState } from "react";
import volunteerImg from "../../../assets/volunteer.png";
import donateImg from "../../../assets/donate.png";
import { Link } from "react-router-dom";
import DonationPopupForm from "./DonationPopupForm";

const VolunteerDonateSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section>
        {/*  Overlay */}
      <div className="bg-[#F6F3EA] w-full h-[133px]"></div>    
          {/* 🔥 CARD 1 */}
        <div className=" max-w-[1440px] pb-12 px-4 md:px-8 lg:px-12 xl:px-[72px] mx-auto grid md:grid-cols-2 gap-5 -mt-[133px]">
          {/* 🔥 CARD 1 */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Image */}
            <img
              src={volunteerImg}
              alt="Become a Volunteer"
              className="w-full h-[320px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#1f6f64]/80"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">
                Become a Volunteer
              </h2>

              <p className="text-sm md:text-base mb-5 max-w-md">
                Join us as a volunteer to support food drives, education,
                healthcare, and community programs, bringing hope to those in
                need.
              </p>

              <Link to="/contact" className="relative inline-block  cursor-pointer w-fit bg-[#FFAC00] -skew-x-[12deg] px-10 py-2.5 text-sm md:text-base  hover:scale-110 transition-all duration-300">
                  <span className="block skew-x-[12deg] text-white text-sm font-semibold uppercase">
                   Join Now
                </span>
              </Link>
            </div>
          </div>

          {/* 🔥 CARD 2 */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Image */}
            <img
              src={donateImg}
              alt="Donate Now"
              className="w-full h-[320px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">
                Donate Now
              </h2>

              <p className="text-sm md:text-base mb-5 max-w-md">
                Your donation helps provide food, education, healthcare, and
                essential support to those in need, creating hope and a brighter
                future.
              </p>

              <button
                onClick={() => setOpen(true)}
                className="relative inline-block  cursor-pointer w-fit bg-[#FFAC00] -skew-x-[12deg] px-8 py-2.5 text-sm md:text-base  hover:scale-110 transition-all duration-300">
                  <span className="block skew-x-[12deg] text-white text-sm font-semibold uppercase">
                    Donate Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* 🔥 POPUP FORM */}
      <DonationPopupForm
        isOpen={open}
        onClose={() => setOpen(false)}
        service="General Donation"
      />
    </>
  );
};

export default VolunteerDonateSection;
