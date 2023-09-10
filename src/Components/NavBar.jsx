import React from 'react'
import { Link } from 'react-router-dom'
import './Component.css'

export default function NavBar() {
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
    </nav>
  )
}
