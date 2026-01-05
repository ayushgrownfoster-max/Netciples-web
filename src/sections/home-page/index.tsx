import React from 'react'

import HeroSection from './hero-section'
import ImpactSection from './impact-section'
import ServicesSection from './services-section'
import ChooseUsSection from './choose-us-section'
import ConsultationSection from './consultation-section'

const  HomePageView = () => (
    <div>
        <HeroSection/>
        <ServicesSection/>
        <ChooseUsSection/>
        <ImpactSection/>
        {/* <ReviewSection/> */}
        <ConsultationSection/>
        
    </div>

  )

export default HomePageView
