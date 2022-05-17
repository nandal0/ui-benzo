import React from 'react'
// import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Homee from './Homee'
import Delevery from './components/Delevery';
const App = () => {
  return (
    <div>
   <Router>
                <Routes>
                    <Route path="/" element={<Homee />} />
                    <Route path="/in-order" element={<Delevery />} />
                  
                </Routes>
            </Router>
    </div>
  )
}

export default App