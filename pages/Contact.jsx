import React from 'react'
import ContactHero from '../components6/ContactHero'
import QuickContactCards from'../components6/QuickContactCards'
import SmartContactForm from'../components6/SmartContactForm'
import BranchLocations from'../components6/BranchLocations'
import BusinessHours from'../components6/BusinessHours'
import SocialProof from'../components6/SocialProof'

const Contact = () => {
  return (
    <div>
     <ContactHero/> 
     <QuickContactCards/>
     <SmartContactForm/>
     <BranchLocations/>
     <BusinessHours/>
     <SocialProof/>
     
    </div>
  )
}

export default Contact
