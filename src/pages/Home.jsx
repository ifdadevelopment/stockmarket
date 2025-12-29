import React, { useRef } from 'react'
import AlertBanner from '../components/AlertBanner'
import IntradayHero from '../components/IntradayHero'
import WhatToExpect from '../components/WhatToExpect'
import OnboardingCompliance from '../components/Onboarding'
import SubscribePlans from '../components/SubscribePlans'
import WhatMakesUsBetter from '../components/WhatMakesUsBetter'
import FaqSimple from '../components/FaqSimple'

const Home = () => {
  const subscribeRef = useRef(null)

  const handleSubscribeScroll = () => {
    subscribeRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  return (
    <>
      <AlertBanner />
      <IntradayHero onSubscribe={handleSubscribeScroll} />
      <WhatToExpect />
      <OnboardingCompliance />
      <div ref={subscribeRef}>
        <SubscribePlans />
      </div>

      <WhatMakesUsBetter />
      <FaqSimple />
    </>
  )
}

export default Home