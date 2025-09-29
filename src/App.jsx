import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './common/Navbar'
import Hero from './Components/HeroSection/Hero'
import ServiceAsSoft from './Components/ServiceAsSoftware/ServiceAsSoft'
import AnimatedResults from './Components/ProvenResults/ProvenResults'
import UltraProProducts from './Components/UltraProProducts/UltraProProducts'
// import ProvenResults from './Components/ProvenResults/ProvenResults'

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

      
    </>
  )
}

export default App
