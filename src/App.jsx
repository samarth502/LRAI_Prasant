import { useCallback, useState } from 'react'
import './App.css'
import Navbar from './common/Navbar'

import { Route, Routes } from 'react-router-dom'
import Home from './Components/HomePage/Home'
import Insights from './Components/Insight/Insights'
import FooterOne from './common/FooterOne'

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
        
        <Route path="/about" element={<div>About Page Content</div>} />
        <Route path="/services" element={<div>Services Page Content</div>} />
        <Route path="/case-studies" element={<div>Case Studies Page Content</div>} />
        <Route path="/contact" element={<div>Contact Us Page Content</div>} />
        {/* ... other routes for /services, /case-studies, etc. */}
      </Routes>
      <FooterOne/>


      
    </>
  )
}

export default App
