import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
        FOODnFOODS
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/contact-us'>Contact Us</Link>
            <Link to='/review-us'>Review Us</Link>
        </div>
    </nav>
  )
}
