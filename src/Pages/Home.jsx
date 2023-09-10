import React from 'react'
import heroImg from '../assets/hero.png'
import { LuChefHat } from 'react-icons/lu';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { FaCartPlus } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import ServicesCard from '../Components/ServicesCard'
import About from './About';

export default function Home() {


  const cardsData = [
    {
      icon: <LuChefHat />,
      heading: 'Master Chefs',
      text: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam 1',
    },
    {
      icon: <GiForkKnifeSpoon />,
      heading: 'Quality Food',
      text: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam 2',
    },
    {
      icon: <FaCartPlus />,
      heading: 'Online Order',
      text: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam 3',
    },
    {
      icon: <RiCustomerService2Fill />,
      heading: '24/7 Service',
      text: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam 4',
    },
  ];

  return (
    <>
      <div className='hero-section'>
        <div className='overlay'>
          <div className='hero-txt' >
            <h1 data-aos='fade-right'>Enjoy Our <br/> Delicious Meal</h1>
            <p data-aos='fade-right' data-aos-delay='100'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <button className='btn'>Review Us</button>
          </div>
          <div className='hero-img'>
            <img src={heroImg}/>
          </div>
        </div>
      </div>

      <div className='section-heading'>
        <p>Our Services</p>
        <div></div>
      </div>
      <div className='home-cards'>
        {
          cardsData.map((val, key) => (
            <ServicesCard
              key={key}
              icon={val.icon}
              heading={val.heading} 
              text={val.text}
            />
          ))
        }
      </div>

        <About/>
    </>
  )
}
