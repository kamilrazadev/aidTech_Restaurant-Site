import React from 'react'
import heroImg from '../assets/hero.png'

export default function Home() {
  return (
    <>
      <div className='hero-section'>
        <div className='overlay'>
          <div>
            <h1>Enjoy Our Delicious Meal</h1>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <button className='review-btn'>Review Us</button>
          </div>
          <div>
            <img className='hero-img' src={heroImg}/>
          </div>
        </div>
      </div>
    </>
  )
}
