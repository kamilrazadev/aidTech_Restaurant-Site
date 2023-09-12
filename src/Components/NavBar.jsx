import React from 'react'
import { Link } from 'react-router-dom'
import './Component.css'

export default function NavBar() {

  const handleNavShow = () => {
    
  }

  return (
    <nav>
        <h3 className='brand-name'>FOODnFOODS</h3>
        <div className='nav-links'>
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/about'>About</Link>
            <Link className='nav-link' to='/menu'>Menu</Link>
            <Link className='nav-link' to='/team'>Our Team</Link>
            {/* <Link className='nav-link' to='/contact-us'>Contact Us</Link> */}
            {/* <Link className='nav-link' to='/review-us'>Review Us</Link> */}
        </div>

        <div className='nav-toogle'>
          <input type="checkbox" id="checkbox" onClick={handleNavShow} />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1" />
            <div className="bars" id="bar2" />
            <div className="bars" id="bar3" />
            <div className='nav-links-responsive'>
          <Link className='nav-link' to='/'>Home</Link>
          <Link className='nav-link' to='/about'>About</Link>
          <Link className='nav-link' to='/menu'>Menu</Link>
          <Link className='nav-link' to='/team'>Our Team</Link>
        </div>
          </label>  
          
        </div>
        
        

    </nav>
  )
}
