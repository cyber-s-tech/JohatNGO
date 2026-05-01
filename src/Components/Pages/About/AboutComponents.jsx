import React from 'react';
import AboutBanner from '../About/AboutBanner';
import AboutSection from '../About/AboutSection';
import CallToAction from '../Home/CallToAction';
import Testimonials from '../Home/Testimonials';
import FAQ from '../About/FAQ'

const AboutComponents = () => {
  return (
    <div>
      <AboutBanner/>
      <AboutSection/>
      <CallToAction/>
      <Testimonials/>
      <FAQ/>
    </div>
  )
}

export default AboutComponents