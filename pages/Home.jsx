import React from 'react'
import HeroVideoCarousel from '../components/HeroVideoCarousel'
import TourCategories from '../components/TourCategories'
import FeaturedPackages from '../components/FeaturedPackages'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonial from '../components/Testimonials'
import FestiveCarousel from '../components/FestiveCarousel'




const Home = () => {
  return (
    <div>
      <HeroVideoCarousel/>
      
      <TourCategories/>
      <FeaturedPackages/>
      < WhyChooseUs/>
      <FestiveCarousel/>
      <Testimonial />
      
    </div>
  )
}

export default Home
