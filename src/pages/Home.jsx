import React from 'react'
import HomeMain from '../components/HomeMain'
import Training from '../components/Training'
import Advisory from '../components/Advisory'
import StrategySection from '../components/Strategy'
import AppsSection from '../components/Apps'
import HeroSection from '../components/HeroSection'
import FinancialFreedomSection from '../components/FinancialFreedomSection'
import StoxoBanner from '../components/StoxoBanner'
import InsightsExperts from '../components/InsightsExperts'

const Home = () => {
  return (
    <>
      <HeroSection />
      <StoxoBanner/>
      <FinancialFreedomSection/>
      <InsightsExperts/>
      <HomeMain />
      <Training />
      <Advisory />
      <AppsSection />
      <StrategySection />
    </>
  )
}

export default Home