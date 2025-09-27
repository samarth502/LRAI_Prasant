import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './common/Navbar'
import Hero from './Components/HeroSection/Hero'
import ServiceAsSoft from './Components/ServiceAsSoftware/ServiceAsSoft'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <ServiceAsSoft/>
    </>
  )
}

export default App
