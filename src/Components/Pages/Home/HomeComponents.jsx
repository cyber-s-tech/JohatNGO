import React from 'react';
import Homebanner from './Homebanner';
import Service from './Service';
import Aboutus from './Aboutus';
import Donation from './Donation';
import CallToAction from './CallToAction';
import RecentWork from './RecentWork';

const HomeComponents = () => {
  return (
    <div>
      <Homebanner/>
      <Service/>
      <Aboutus/>
      <CallToAction/>
      <Donation/>
      <RecentWork/>
    </div>
  )
}

export default HomeComponents