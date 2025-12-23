import React from 'react'
import AboutBanner from '../components2/AboutBanner'
import CompanyOverview from '../components2/CompanyOverview'
import MissionVision from '../components2/MissionVision'
import WhyChoose from '../components2/WhyChoose'
import ExperienceAchievements from '../components2/ExperienceAchievements'
import OurServices from '../components2/OurServices'
import CustomerCommitment from '../components2/CustomerCommitment'
import LeadershipTeam from '../components2/LeadershipTeam'
import TrustBadges from '../components2/TrustBadges'
import ClosingCTA from '../components2/ClosingCTA'
const About = () => {
  return (
    <div>
      <AboutBanner/>
      <CompanyOverview/>
      <MissionVision/>
      <WhyChoose/>
      <ExperienceAchievements/>
      <OurServices/>
      <CustomerCommitment/>
      <LeadershipTeam/>
      <TrustBadges/>
      <ClosingCTA/>
    </div>
  )
}

export default About
