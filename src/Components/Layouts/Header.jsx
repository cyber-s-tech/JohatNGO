import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white">

      {/* CONTAINER */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[72px] py-1">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-3 gap-8">

          {/* LEFT LOGO */}
          <div className="flex items-center">
            <a href="/" className="text-decoration-none"><img
              src={logo}
              alt="logo"
              className="w-[154px] h-[84px] object-contain"
            />
            </a>
          </div>

          {/* CENTER NAV */}
          <nav className="hidden md:flex justify-center items-center gap-3 md:gap-6 xl:gap-[35px] text-xs lg:text-base whitespace-nowrap">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "lg:px-6 py-2.5 text-sm lg:text-base font-[550] text-[#FFAC00]"
                  : "lg:px-6 py-2.5 text-sm lg:text-base font-[550] text-[#313131]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "lg:px-4 py-2.5 text-sm lg:text-base font-[550] text-[#FFAC00]"
                  : "lg:px-4 py-2.5 text-sm lg:text-base font-[550] text-[#313131]"
              }
            >About Us
            </NavLink>
            <NavLink
              to="/our-work"
              className={({ isActive }) =>
                isActive
                  ? "lg:px-4 py-2.5 text-sm lg:text-base font-[550] text-[#FFAC00]"
                  : "lg:px-4 py-2.5 text-sm lg:text-base font-[550] text-[#313131]"
              }
            >Our Work
            </NavLink>
            <NavLink
              to="/event"
              className={({ isActive }) =>
                isActive
                  ? "lg:px-6 py-2.5 text-sm lg:text-base font-[550] text-[#FFAC00]"
                  : "lg:px-6 py-2.5 text-sm lg:text-base font-[550] text-[#313131]"
              }
            >Event
            </NavLink>
          </nav>

          {/* RIGHT BUTTON */}
          <div className="flex justify-end items-center py-[22px]">
            <button className="hidden md:inline-block bg-[#FFAC00] -skew-x-[12deg] px-7 py-2 text-sm md:text-base md:px-9 md:py-4 cursor-pointer">
                  <span className="block skew-x-[12deg] text-white text-sm font-semibold uppercase">
                    Give Support
                  </span>
                </button>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden mt-4 ml-auto flex items-center rounded-lg  bg-transparent  justify-center h-16 w-16 text-[#1F6B5A]"
            onClick={() => setOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1F6B5A" stroke="#1F6B5A"
              strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* OFF-CANVAS MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      ><button onClick={() => setOpen(false)} className="ml-6 my-6 py-1 px-2.5 text-xl left-0 bg-[#1F6B5A] text-white rounded-full">✕</button>
        <div className=" flex flex-col gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "px-6 py-4 text-base font-[550] bg-[#FFAC00] text-white"
                : "px-6 py-4 text-base font-[550] bg-transparent text-[#313131]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "px-6 py-4 text-base font-[550] bg-[#FFAC00] text-white"
                : "px-6 py-4 text-base font-[550] bg-transparent text-[#313131]"
            }
          >About Us
          </NavLink>
          <NavLink
            to="/our-work"
            className={({ isActive }) =>
              isActive
                ? "px-6 py-4 text-base font-[550] bg-[#FFAC00] text-white"
                : "px-6 py-4 text-base font-[550] bg-transparent text-[#313131]"
            }
          >Our Work
          </NavLink>
          <NavLink
            to="/event"
            className={({ isActive }) =>
              isActive
                ? "px-6 py-4 text-base font-[550] bg-[#FFAC00] text-white"
                : "px-6 py-4 text-base font-[550] bg-transparent text-[#313131]"
            }
          >Event
          </NavLink>


          <button className="md:hidden bg-[#FFAC00] -skew-x-[12deg] px-7 py-2 text-sm md:text-base md:px-9 md:py-4  mx-6 cursor-pointer">
                  <span className="block skew-x-[12deg] text-white text-sm font-semibold uppercase">
                    Give Support
                  </span>
                </button>
                

        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}