import React from 'react'
import HeroSection from "../components1/HeroSection"
import FeaturedTours from "../components1/FeaturedTours"
import TourCategories from "../components1/TourCategories"
import TourListings from "../components1/TourListings"
import FestiveOffers from "../components1/FestiveOffers"
import  AutoTestimonials from "../components1/AutoTestimonials"
import  CallToAction from "../components1/CallToAction"
const Tours = () => {
  return (
    <div>
      <HeroSection/>
      <FeaturedTours/>
      <TourCategories/>
      <TourListings />
      <FestiveOffers/>
      <AutoTestimonials/>
      <CallToAction />
    </div>
  )
}

export default Tours
