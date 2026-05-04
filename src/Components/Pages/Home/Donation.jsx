import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { submitDonation } from "../../../Api/Api";
import { Link } from "react-router-dom";
const Donation = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await submitDonation(form);

      if (res.success) {
        alert("✅ Submitted!");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error");
    }
  };

  return (
    <section className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div className="relative bg-[#f8f8f8] p-4 md:p-6 lg:p-12 xl:p-[75px]  shadow-sm overflow-hidden">
        {/* Background image with opacity */}
        <div
          className="absolute w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] bg-no-repeat pointer-events-none "
          style={{
            backgroundImage: "url('/vut.svg')",
            backgroundPosition: "right bottom",
            backgroundSize: "contain", // or "200px", "50%", etc.

            right: "-35px",
            bottom: "-30px",
            opacity: 1,
          }}
        />
        <div className="relative z-10">
          <div className=" mb-8">
            <span className="relative inline-block text-[#FFAC00]  italic text-xl md:text-[24px] font-caveat font-bold after:content-[''] after:absolute after:left-0 after:top-0 after:w-1/2 after:border-t-2 after:border-yellow-500 pt-2">
              Help us Donate
            </span>
            <h2 className="font-display text-[32px] lg:text-[50px] leading-[45px] lg:leading-[60px] tracking-[-2px] font-bold text-slate-900  mt-2">
              Start Donating
            </h2>
          </div>

          <form className="space-y-4 " onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-amber-500 shadow-sm outline-none"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-amber-500 shadow-sm outline-none"
              />
            </div>

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-amber-500 shadow-sm outline-none"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full p-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-amber-500 shadow-sm outline-none"
            ></textarea>

            <div className="pt-4">
              <button type="submit" className="cursor-pointer bg-[#FFAC00] text-white font-bold px-8 py-3 lg:py-4 lg:px-9 uppercase tracking-widest text-xs hover:bg-[#1F6B5A] hover:scale-110 transition-all duration-300 cursor-pointer transform -skew-x-12">
                <span className="inline-block skew-x-12 text-xs uppercase tracking-widest">
                  Send a Message
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Section: Image and Info */}
      <div className="flex flex-col shadow-2xl  overflow-hidden">
        <div className="h-full md:h-2/3">
          <img
            src="donation.jpg"
            alt="Children"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full md:h-1/3 bg-amber-500 p-3 lg:p-4 grid grid-cols-1 lg:grid-cols-2 justify-around items-center text-white gap-2 md:gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-white p-3 rounded-full text-[#313131] shrink-0">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <div className="text-sm">
              <p className="font-semibold">johat1011953@outlook.com</p>
              <p>+1-231-427-2289</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white p-3 rounded-full text-[#313131] shrink-0">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
              </svg>
            </div>
            <div className="text-sm leading-tight">
              <p className="font-semibold">3975 Pulverwoods Rd,</p>
              <p>Williamsburg, MI 49690, USA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
