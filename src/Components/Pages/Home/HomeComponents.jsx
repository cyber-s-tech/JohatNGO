import React from 'react';
import Homebanner from './Homebanner';
import Service from './Service';
import Aboutus from './Aboutus';
import Donation from './Donation';
import CallToAction from './CallToAction';
import RecentWork from './RecentWork';
import Testimonials from './Testimonials';

const HomeComponents = () => {
  return (
    <div>
      <Homebanner/>
      <Service/>
      <Aboutus/>
      <CallToAction/>
      <Donation/>
      <Testimonials/>
      <RecentWork/>
    </div>
  )
}

export default HomeComponents