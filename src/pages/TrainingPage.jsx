import React from 'react'
import HeroTrading from '../components/HeroTrading'
import FeaturesSection from '../components/FeaturesSection'
import StockCourseSection from '../components/StockCourseSection'
import CourseContentSection from '../components/CourseContentSection'
import ScheduleSection from '../components/ScheduleSection'
import EnquirySection from '../components/EnquirySection'
import TrustBadgesSection from '../components/TrustBadgesSection'
import AcademyHeroSection from '../components/AcademyHeroSection'

const TrainingPage = () => {
  return (
    <>
    <HeroTrading/>
    <FeaturesSection />
    <StockCourseSection/>
    <CourseContentSection/>
    <ScheduleSection/>
    <AcademyHeroSection/>
    <EnquirySection/>
    <TrustBadgesSection/>
    </>
  )
}

export default TrainingPage