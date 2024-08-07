import React from 'react'

import HeroSection from './Component/Section/HeroSection';

import CTA from './Component/Section/CTA';
import Testimonial from './Component/Section/TestImonial';
import Show from './Component/Section/Show'
import Tvprog from './Component/Section/tvprog';
import News from './Component/Section/News'

import AboutUs from './Component/Section/AboutUs';
import Vision from './Component/Section/Vision';
import { dividerClasses } from '@mui/material';

const Home = () => {
  return (
    <div>
        
        <HeroSection/>
        <Vision />
        <AboutUs/>
  <CTA/>
  
  <Testimonial/>
  <Show/>
  <Tvprog/>
  <News/>
      </div>
  )
}

export default Home