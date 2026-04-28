import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Aboutus = () => {

  const rightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Animate children with stagger (better than animating whole div)
     gsap.fromTo(
  rightRef.current.children,
  {
    y: 140,          // ⬅️ more travel distance (clear motion)
    opacity: 0,
    scale: 0.96      // ⬅️ subtle depth (pro feel)
  },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 1.6,   // ⬅️ slower
    ease: "expo.out",// ⬅️ smoother than power2
    stagger: 0.4,    // ⬅️ clearer sequence
    scrollTrigger: {
      trigger: rightRef.current,

      start: "top 65%",   // ⬅️ MUCH later trigger (key fix)
      end: "top 30%",

      toggleActions: "play none none reset",
      // plays only when reached, resets if you scroll back

      once: true, // ⬅️ prevents early accidental play
      markers: false // set true if you want to debug
    }
  }
)
    }, rightRef)

    return () => ctx.revert()
  }, [])


  return (
        <div className="max-w-[1440px] mx-auto py-16 px-4 md:px-8 lg:px-9 xl:px-[72px] bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-12 items-center">
 
        {/* Left Column: Image Container */}
        <div className="relative h-[300px] md:h-[500px] lg:h-[640px] w-full overflow-hidden">
          <img
            src="/about.png"
            alt="Volunteer reading with children"
            className="w-full h-full object-cover"
          />
        </div>
 
        {/* Right Column: Content */}
        <div  ref={rightRef} className="space-y-3 lg:space-y-6">
          <div className="space-y-2">
            <span className="relative inline-block text-[#FFAC00] italic text-xl md:text-[24px] font-caveat font-bold after:content-[''] after:absolute after:left-0 after:top-0 after:w-1/2 after:border-t-2 after:border-yellow-500">
              About Us
            </span>
            <h2 className="font-display font-bold text-[32px] lg:text-[50px] leading-[45px] lg:leading-[60px] tracking-[-2px] text-slate-900 align-middle">
              We're Non-profit <br /> Charity Organization
            </h2>
          </div>
 
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
            We are a nonprofit organization dedicated to improving lives and building
            stronger communities. Our mission is to provide support to those in need
            through food donation, education, healthcare, and community
            development programs.
          </p>
 
          {/* Icon Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 xl:gap-[44px] pt-3">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="bg-emerald-600 rounded-full p-1">
                  <svg className="md:w-4 md:h-4 w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800 font-display">Our Mission</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Supporting underprivileged communities through food, education, healthcare
              </p>
            </div>
 
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="bg-emerald-600 rounded-full p-1">
                  <svg className="md:w-4 md:h-4 w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800 font-display">Our Story</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Building a better future with equal opportunities, basic needs, and stronger communities.
              </p>
            </div>
          </div>
 
          {/* CTA Button */}
          <div className="pt-4">
            <Link to="/about-us">
            <button className="cursor-pointer bg-[#FFAC00] text-white font-bold px-8 py-3 lg:py-4 lg:px-15 uppercase tracking-widest text-xs transition-colors duration-200 transform -skew-x-12">
              <span className="inline-block skew-x-12">Learn More</span>
            </button>
            </Link>
          </div>
        </div>
 
      </div>
    </div>
  )
}

export default Aboutus