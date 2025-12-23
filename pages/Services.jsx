import React from 'react'
import  ServicesObjective from "../components3/ServicesObjective"
import  CoreServices from "../components3/CoreServices"
import  TransportLogistics from "../components3/TransportLogistics"
import  TravelSupport from "../components3/TravelSupport"
import  SpecialInterestTours from "../components3/SpecialInterestTours"
import  WhyChooseKN from "../components3/WhyChooseKN"
import  HowWeWork from "../components3/HowWeWork"
import  ServicesCTA from "../components3/ServicesCTA"
function Services() {
  return (
    <div>
     <ServicesObjective/> 
     <CoreServices/>
     <TransportLogistics/>
     <TravelSupport/>
     <SpecialInterestTours/>
     <WhyChooseKN/>
     <HowWeWork/>
     <ServicesCTA/>
    </div>
  )
}

export default Services
