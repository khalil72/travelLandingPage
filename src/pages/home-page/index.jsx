import React from 'react'
import { BookTripSection, DestinationSection, HeroSection, ServicesSection, TestimonailSection } from '../../components/main'
import SubscribeSection from '../../components/main/subscribe-section'
import LogoSection from '../../components/main/logo-section'

const HomePage= () => {
  
  return (
    <>
   
     <section className='pt-[105px]  '>
      <HeroSection />
     </section>
     
     <section className='pt-[105px]'>
      <ServicesSection />
     </section>
     <section className='pt-[105px]'>
      <DestinationSection />
     </section>
     <section className='pt-[105px]'>
      <BookTripSection />
     </section>
     <section className='pt-[110px]'>
     <TestimonailSection />
     </section>
     <section className='pt-[105px]'>
      <LogoSection />

     </section>
     <section className='pt-[105px]'>
      <SubscribeSection />

     </section>
    </>
  )
}

export default HomePage