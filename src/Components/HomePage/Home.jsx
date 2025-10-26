import React from 'react'
import Hero from './Component/Hero'
import ServiceAsSoft from './Component/ServiceAsSoft'
import AnimatedResults from './Component/AnimatedResults'
import UltraProProducts from './Component/UltraProProducts'
import ClientTestimonialsOne from './Component/ClientTestimonialsOne'
import PartnerWithInovative from './Component/PartnerWithInovative'
import FrequentlyAsked from './Component/FrequentlyAsked'
import FooterOne from '../../common/FooterOne'

const Home = () => {
  return (
    <>
    <Hero/>
     <ServiceAsSoft/>
     {/* The component with the dynamic scrolling animation */}
      <AnimatedResults />

      <UltraProProducts/>
      {/* <IndustriesTransformedOne/> */}
      <ClientTestimonialsOne/>
      <PartnerWithInovative/>
      <FrequentlyAsked/>
     
    </>
  )
}

export default Home;