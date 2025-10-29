import React, { useEffect } from 'react'
import SimplifiedCryptoTrading from '../components/SimplifiedCryptoTrading'
import GrowYourProfit from '../components/GrowYourProfit'
import OurVision from '../components/OurVision'

const Aboutus = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <>
    <GrowYourProfit/>
    <OurVision/>
    <SimplifiedCryptoTrading/>
    
    </>
  )
}

export default Aboutus