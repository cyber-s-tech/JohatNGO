import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";

export default function ContactForm ()  {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phone: "",
    },
  });

  /* =========================
     CAPTCHA LOGIC
  ========================= */
  const [captcha, setCaptcha] = React.useState({ num1: 0, num2: 0 });
  const [showCaptcha, setShowCaptcha] = React.useState(false);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2 });
  };

  React.useEffect(() => {
    generateCaptcha();
  }, []);

  /* =========================
     SUBMIT
  ========================= */
 const onSubmitForm = (data) => {
  // STEP 1: if captcha not shown → show it first
  if (!showCaptcha) {
    setShowCaptcha(true);
    generateCaptcha();
    return;
  }

  // STEP 2: captcha already visible → final submit
  console.log("Final Form Data:", data);
  console.log("Submitted Successfully");

  reset();
  setShowCaptcha(false);
  generateCaptcha();
};

const required = { required: "This field is required" };
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.05fr]">

            {/* LEFT: FORM */}
            <div className="bg-[#F7F7F7] px-4 md:px-8 lg:px-12 xl:px-[72px] py-[150px]">
                <div className="w-10 h-[2px] bg-[#FFAC00]" />
                  <p className="text-md md:text-2xl text-[#FFAC00] italic font-caveat pt-1">
                    Contact Now
                  </p>

                <h2 className="font-display text-[32px] lg:text-[50px] leading-[45px] lg:leading-[60px] tracking-[-2px] font-bold text-slate-900  mt-2">
                    Get In Touch
                </h2>
                <form  onSubmit={handleSubmit(onSubmitForm)}  className="mt-[35px] space-y-4">
                    <input
                        type="text"
                        placeholder="Name*"
                        {...register("name", {
                      required: "Name is required",
                      pattern: {
                        value:
                          /^[A-Za-z\s]+$/,
                        message: "Only letters are allowed",
                      },
                    })}
                        className="w-full border border-[#D7D7D7] px-5 py-4 outline-none"
                    />
                    {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}

                    <input
                        type="tel"
                        placeholder="Phone*"
                        className="w-full border border-[#D7D7D7] px-5 py-4 outline-none"
                        {...register("phone", {
            required: "Phone number is required",
            validate: {
  validFormat: (value) => {
    if (value === "") return true;

    const plusCount = (value.match(/\+/g) || []).length;

    if (plusCount > 1) {
      return "Only one '+' is allowed";
    }

    if (value.includes("+") && !value.startsWith("+")) {
      return "'+' must be at the beginning";
    }

    if (!/^[+]?[0-9]*$/.test(value)) {
      return "Only digits and '+' at the beginning are allowed";
    }

    if (value.length > 16) {
      return "Phone number too long";
    }

    return true;
  },
}
          })}
          onInput={(e) => {
           e.preventDefault();
  let paste = (e.clipboardData || window.clipboardData).getData("text");

  paste = paste.replace(/[^0-9+]/g, "");

  if (paste.startsWith("+")) {
    paste = "+" + paste.slice(1).replace(/\+/g, "");
  } else {
    paste = paste.replace(/\+/g, "");
  }

  setValue("phone", paste.slice(0, 15));
  }}
  onPaste={(e) => {
  e.preventDefault();
  let paste = (e.clipboardData || window.clipboardData).getData("text");

  paste = paste.replace(/[^0-9+]/g, "");

  if (paste.startsWith("+")) {
    paste = "+" + paste.slice(1).replace(/\+/g, "");
  } else {
    paste = paste.replace(/\+/g, "");
  }

  setValue("phone", paste.slice(0, 15));
}}
                    />
                    {errors.phone && (
                    <p className="text-red-500">{errors.phone.message}</p>
                  )}

                    <input
                        type="email"
                        placeholder="Email*"
                        className="w-full border border-[#D7D7D7] px-5 py-4 outline-none"
                        {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|in)$/,
                        message: "Invalid email",
                      },
                    })}
                    />
 {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                    <textarea
                        rows="5"
                        placeholder="Tell us something...."
                        className="w-full border border-[#D7D7D7] px-5 py-4 outline-none"
                         {...register("message")}
                    ></textarea>

                    {/* CAPTCHA */}
                {showCaptcha && (
  <div className="md:col-span-2">
    <label className="block text-sm mb-[4px]">
      Captcha: {captcha.num1} + {captcha.num2} = ?
    </label>

    <input
      type="text"
      placeholder="Your Answer"
      className={`className="w-full border border-[#D7D7D7] px-5 py-4 outline-none" ${
        errors.captcha ? "is-invalid" : ""
      }`}
      {...register("captcha", {
        required: "Captcha is required",
        validate: (value) =>
          parseInt(value) === captcha.num1 + captcha.num2 ||
          "Incorrect captcha",
      })}
    />

    {errors.captcha && (
      <p className="text-red-500 text-base">{errors.captcha.message}</p>
    )}
  </div>
)}

                    <button className="bg-[#FFAC00] -skew-x-[12deg] px-7 py-2 text-sm md:text-base md:px-9 md:py-4 hover:bg-[#1F6B5A] hover:scale-110 transition-all duration-300 cursor-pointer">
                        <span className="block skew-x-[12deg] text-white text-sm font-semibold uppercase">
                            Submit Now
                        </span>
                    </button>
                </form>
            </div>

            {/* RIGHT: MAP */}
            <div className="relative w-full h-[500px] lg:h-auto">

                {/* Google Map */}
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.892409020854!2d-85.37938472406391!3d44.742211781320904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881fc4c0bf24a8e9%3A0x59afda054e8f9833!2s3975%20Pulverwoods%20Rd%2C%20Williamsburg%2C%20MI%2049690%2C%20USA!5e0!3m2!1sen!2sin!4v1777630601128!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    loading="lazy"
                ></iframe>

                {/* YELLOW CARD */}
                <div className="absolute left-0 bottom-0 bg-[#FFAC00] text-white px-4 py-8 md:w-[40%] space-y-4 xl:pl-9 xl:pr-14 xl:py-[44px] lg:w-[55%] xl:space-y-6 shadow-lg">

                    {/* Phone */}
                    <div className="flex gap-6 border-b border-white/40 pb-2 xl:pb-6">
                        <div className="w-[48px] h-[48px] rounded-full bg-white/20 flex items-center justify-center">
                            <Phone className="text-white w-10 h-10 xl:w-14 xl:h-14  ml-5 mt-7" />
                        </div>
                        <div>
                            <p className="font-medium text-base sm:text-xl xl:text-[30px] leading-relaxed font-display">Phone</p>
                            <a href="tel:+1-231-427-2289" className="text-xs sm:text-sm xl:text-base">+1-231-427-2289</a><br/>
                            <a href="tel:+1-231-459-6853" className="text-xs sm:text-sm xl:text-base">+1-231-459-6853</a>
                        </div>
                    </div>

                    

                    {/* Email */}
                    <div className="flex gap-6 border-b border-white/40 pb-2 xl:pb-6">
                        <div className="w-[48px] h-[48px] rounded-full bg-white/20 flex items-center justify-center">
                            <EnvelopeSimple weight="fill" className="text-white w-10 h-10 xl:w-14 xl:h-14  ml-5 mt-7"/>
                        </div>

                        <div>
                            <p className="font-medium text-base sm:text-xl xl:text-[30px] leading-relaxed font-display">Email</p>
                            <a href="mailto:johat1o11953@outlook.com" className="text-xs sm:text-sm xl:text-base">johat1o11953@outlook.com</a><br/>
                            <a href="mailto:james@johatenterises.com" className="text-xs sm:text-sm xl:text-base">james@johatenterises.com</a>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex gap-6">
                        <div className="w-[48px] h-[48px] rounded-full bg-white/20 flex items-center justify-center">
                            <MapPin weight="fill" className="text-white w-10 h-10 xl:w-14 xl:h-14  ml-5 mt-7"/>
                        </div>

                        <div>
                            <p className="font-medium text-base sm:text-xl xl:text-[30px] leading-relaxed font-display">Location</p>
                            <a href="https://maps.app.goo.gl/PeXnxYz9fCtw14re8" className="text-xs sm:text-sm xl:text-base">
                                3795 Plymouth Rd<br />
                                Williamsburg, MI 49690, USA
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

