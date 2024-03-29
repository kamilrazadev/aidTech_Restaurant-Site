import React from 'react'
import { GiForkKnifeSpoon } from 'react-icons/gi';
import about1img from '../assets/about-1.jpg'
import about2img from '../assets/about-2.jpg'
import about3img from '../assets/about-3.jpg'
import about4img from '../assets/about-4.jpg'
import AboutCard from '../Components/AboutCard';

export default function About() {
  return (
    <div className='about-section'>
      <div className='about-images'>
        <div className='images-div'>
          <img src={about1img} className='about-img-1' data-aos='zoom-in' />
        </div>
        <div className='images-div'>
          <img src={about2img} className='about-img-2' data-aos='zoom-in' data-aos-delay='200' />
        </div>
        <div className='images-div'>
          <img src={about3img} className='about-img-3' data-aos='zoom-in' data-aos-delay='400' />
        </div>
        <div className='images-div' >
          <img src={about4img} className='about-img-4' data-aos='zoom-in' data-aos-delay='600' />
        </div>
      </div>

      <div className='about-content'>
      <div className='section-heading about-heading'>
        <p>About Us</p>
        <div></div>
      </div>
        <h3 className='main-heading'>Welcome to <GiForkKnifeSpoon className='about-icon' />FoodnFood</h3>
        <p className='about-txt'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
        <p className='about-txt'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

        <div className='about-cards-div'>
          <AboutCard heading='15' txtPrimary='Years of' txtSecondary='EXPERIENCE' />
          <AboutCard heading='50' txtPrimary='Popular' txtSecondary='MASTER CHEFS' />
        </div>

        <button className='btn readmore-btn'>READ MORE</button>
      </div>
    </div>
  )
}
