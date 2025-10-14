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
import InsideMarket from '../components/InsideMarket'
import MediaPress from '../components/MediaPress'
import StoxoPromo from '../components/StoxoPromo'
import EdVisorySection from '../components/EdVisorySection'
import MarketWrapSection from '../components/MarketWrapSection'
import CommunityHero from '../components/CommunityHero'

const Home = () => {
  return (
    <>
      {/* <HeroSection />
      <StoxoBanner/>
      <FinancialFreedomSection/>
      <InsightsExperts/>
      <InsideMarket/>
      <StoxoPromo/>
      <CommunityHero/>
      <MarketWrapSection/>
      <EdVisorySection/>
      <MediaPress/> */}
      <HomeMain />
      <Training />
      <Advisory />
      <AppsSection />
      <StrategySection />
    </>
  )
}

export default Home