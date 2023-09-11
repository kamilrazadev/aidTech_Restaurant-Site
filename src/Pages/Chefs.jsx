import React from 'react'
import ChefCards from '../Components/ChefCards'

export default function Chefs() {

  const chefsData = [
    {
      image: '/images/team-1.jpg',
      name: "John Doe",
      desgn: "Head Chef"
    },
    {
      image: '/images/team-2.jpg',
      name: "Trevor",
      desgn: "Jr Chef"
    },
    {
      image: '/images/team-3.jpg',
      name: "Michel Decenta",
      desgn: "Desert Expert"
    },
    {
      image: '/images/team-4.jpg',
      name: "Franklin",
      desgn: "Chinese Expert"
    }
  ]

  return (
    <div className='chefs-section'>
      <div className='section-heading' data-aos='fade-up' >
        <div style={{marginRight: '5px'}}></div>
        <p>Master Team</p>
        <div></div>
      </div>
      <h3 className='main-heading' data-aos='fade-up'>Our Master Chefs</h3>
      <div className='chefs-card-contanier'>
        {
          chefsData.map( (val, key) => (
            <ChefCards key={key} image={val.image} desgn={val.desgn} name={val.name} />
          ))
        } 
      </div>
    </div>
  )
}
