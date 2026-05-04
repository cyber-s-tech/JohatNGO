import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { submitDonationEntry } from "../../../Api/Api";

const DonationPopupForm = ({ isOpen, onClose, service }) => {
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
  

 const onSubmitForm = (data) => {
  console.log("Pop up Form Data:", data);
  console.log("Submitted Successfully");

  reset();
};

  if (!isOpen) return null;
const required = { required: "This field is required" };
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl w-full max-w-3xl p-10 relative shadow-xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* 🔥 LOGO CENTER */}
        <div className="flex justify-center mb-4">
          <img
            src="/logo.png" // 👉 change with your logo path
            alt="logo"
            className="h-12 object-contain"
          />
        </div>

        {/* Heading */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 font-display">
          Donate for <span dangerouslySetInnerHTML={{ __html: service }} />
        </h3>

        {/* Form */}
        <form
         onSubmit={handleSubmit(onSubmitForm)}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Inputs */}
          <div className="flex flex-col gap-2">
          <input
            {...register("first_name", {
                      required: "First Name is required",
                      pattern: {
                        value:
                          /^[A-Za-z\s]+$/,
                        message: "Only letters are allowed",
                      },
                    })}
            placeholder="First Name"
            className="input-modern"
          />
          {errors.first_name && (
                    <p className="text-red-500 text-xs">{errors.first_name.message}</p>
                  )}
                  </div>
                  <div className="flex flex-col gap-2">
          <input
            {...register("last_name", {
                      required: "Last Name is required",
                      pattern: {
                        value:
                          /^[A-Za-z\s]+$/,
                        message: "Only letters are allowed",
                      },
                    })}
            placeholder="Last Name"
            className="input-modern"
          />
          {errors.last_name && (
                    <p className="text-red-500 text-xs">{errors.last_name.message}</p>
                  )}
</div>
<div className="flex flex-col gap-2">
          <input
           {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|in)$/,
                        message: "Invalid email",
                      },
                    })}
            type="email"
            placeholder="Email"
            className="input-modern"
          />
          {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email.message}</p>
                  )}
</div>
<div className="flex flex-col gap-2">
          <input
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
            placeholder="Phone Number"
            className="input-modern"
          />
          {errors.phone && (
                    <p className="text-red-500 text-xs">{errors.phone.message}</p>
                  )}
</div>
<div className="flex flex-col gap-2 md:col-span-2">
          <input
            {...register("address", { required: "Address is required"})}
            placeholder="Address"
            className="input-modern "
          />
          {errors.address && (
                    <p className="text-red-500 text-xs">{errors.address.message}</p>
                  )}
</div>
<div className="flex flex-col gap-2">
          <input
            {...register("country", { required: "Country is required" })}
            placeholder="Country"
            className="input-modern"
          />
          {errors.country && (
                    <p className="text-red-500 text-xs">{errors.country.message}</p>
                  )}
</div>
<div className="flex flex-col gap-2">
          <input
            {...register("amount", { required: "Please donate some amount" })}
            type="number"
            placeholder="Donate Amount"
            className="input-modern"
          />
          {errors.amount && (
                    <p className="text-red-500 text-xs">{errors.amount.message}</p>
                  )}
</div>
<div className="flex flex-col gap-2 md:col-span-2">
          <textarea
            {...register("comments")}
            placeholder="Comments"
            rows={4}
            className="input-modern "
          />
</div>
          {/* Submit Button */}
          <button
            type="submit"
            className="md:col-span-2 bg-[#f59e0b] hover:bg-[#d97706] transition-all duration-300 text-white py-3 rounded-lg font-semibold shadow-md"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationPopupForm;
