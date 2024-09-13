import React from 'react'
import { BookTripSection, DestinationSection, HeroSection, ServicesSection } from '../../components/main'
import SubscribeSection from '../../components/main/subscribe-section'
import LogoSection from '../../components/main/logo-section'

const HomePage= () => {
  const pt='105px'
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
     <section className='pt-[105px]'>
      testiminologies
      
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