import { useCallback, useState } from 'react'
import './App.css'
import Navbar from './common/Navbar'

import { Route, Routes } from 'react-router-dom'
import Home from './Components/HomePage/Home'
import Insights from './Components/Insight/Insights'
import FooterOne from './common/FooterOne'
import ServicePage from './Components/Service/Components/ServicePage'
import AboutUs from './Components/AboutUs/Componets/AboutUs'
import ContactFormPage from './Components/ContactPage/ContactFormPage'
import CareerOne from './Components/Career/Component/CareerOne'
import AiCallCenter from './Components/Service/Components/AiCallCenter/AiCallCenter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* The Navbar component is now defined above, resolving the error */}
      <Navbar /> 
      
      {/* Routes define which component loads for which URL path */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* CRITICAL STEP: This maps /insights to your InsightsPage component */}
        <Route path="/insights" element={<Insights/>} />
        
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/case-studies" element={<div>Case Studies Page Content</div>} />
        <Route path="/contact" element={<ContactFormPage/>} />
         <Route path="/career" element={<CareerOne/>} />
         <Route path="/AiCallCenterOne" element={<AiCallCenter/>} />
         {/* <Route path="/RinggUseCases" element={<RinggUseCases/>} /> */}

         

         
        
        
      </Routes>
      <FooterOne/>


      
    </>
  )
}

export default App
