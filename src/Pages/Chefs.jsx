import React from 'react'
import ChefCards from '../Components/ChefCards'
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';


export default function Chefs() {

  const chefsData = [
    {
      image: '/images/team-1.jpg',
      name: "John Doe",
      desgn: "Head Chef",
      fb: <BsFacebook/>,
      insta: <AiOutlineInstagram/>,
      twitter: <AiFillTwitterCircle/>
    },
    {
      image: '/images/team-2.jpg',
      name: "Trevor",
      desgn: "Jr Chef",
      fb: <BsFacebook/>,
      insta: <AiOutlineInstagram/>,
      twitter: <AiFillTwitterCircle/>
    },
    {
      image: '/images/team-3.jpg',
      name: "Michel Decenta",
      desgn: "Desert Expert",
      fb: <BsFacebook/>,
      insta: <AiOutlineInstagram/>,
      twitter: <AiFillTwitterCircle/>
    },
    {
      image: '/images/team-4.jpg',
      name: "Franklin",
      desgn: "Chinese Expert",
      fb: <BsFacebook/>,
      insta: <AiOutlineInstagram/>,
      twitter: <AiFillTwitterCircle/>
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
            <ChefCards key={key} image={val.image} desgn={val.desgn} name={val.name} fbIcon={val.fb} instaIcon={val.insta} twitterIcon={val.twitter}/>
          ))
        } 
      </div>
    </div>
  )
}
