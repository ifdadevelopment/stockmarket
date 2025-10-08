import React from 'react'
import HomeMain from '../components/HomeMain'
import Training from '../components/Training'
import Advisory from '../components/Advisory'
import StrategySection from '../components/Strategy'
import AppsSection from '../components/Apps'

const Home = () => {
  return (
    <>
      <HomeMain />
      <Training/>
      <Advisory/>
      <AppsSection/>
      <StrategySection/>
    </>
  )
}

export default Home