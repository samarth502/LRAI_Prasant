import { useState } from 'react'
import './App.css'
import Navbar from './common/Navbar'
import Hero from './Components/HeroSection/Hero'
import ServiceAsSoft from './Components/ServiceAsSoftware/ServiceAsSoft'
import AnimatedResults from './Components/ProvenResults/ProvenResults'
import UltraProProducts from './Components/UltraProProducts/UltraProProducts'

import ClientTestimonialsOne from './Components/ClientTestimonialsOne/ClientTestimonialsOne'
import PartnerWithInovative from './Components/PartnerWithInovative/PartnerWithInovative'
import FrequentlyAsked from './Components/FrequentlyAsked/FrequentlyAsked'
import FooterOne from './common/FooterOne'
import IndustriesTransformedOne from './Components/IndustriesTransformed/IndustriesTransformedOne'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <ServiceAsSoft/>
   
      {/* The component with the dynamic scrolling animation */}
      <AnimatedResults />

      <UltraProProducts/>
      <IndustriesTransformedOne/>
      <ClientTestimonialsOne/>
      <PartnerWithInovative/>
      <FrequentlyAsked/>
      <FooterOne/>

      
    </>
  )
}

export default App
