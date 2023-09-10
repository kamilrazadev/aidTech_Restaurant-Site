import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Pages/Menu'
import ContactPage from './Pages/ContactPage'
import ReviewPage from './Pages/ReviewPage'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);


  return (
    <BrowserRouter>
    
      <NavBar />
        
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/contact-us' element={<ContactPage />}/>
          <Route path='/review-us' element={<ReviewPage />}/>
        </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
