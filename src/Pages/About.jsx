import React from 'react'
import about1img from '../assets/about-1.jpg'
import about2img from '../assets/about-2.jpg'
import about3img from '../assets/about-3.jpg'
import about4img from '../assets/about-4.jpg'

export default function About() {
  return (
    <div className='about-section'>
      <div>
        <img src={about1img}/>
        <img src={about2img}/>
        <img src={about3img}/>
        <img src={about4img}/>
      </div>
      <div>
        <p className='about-heading'>About Us</p>
        <h3>Welcome to FoodnFoods</h3>
      </div>
    </div>
  )
}
