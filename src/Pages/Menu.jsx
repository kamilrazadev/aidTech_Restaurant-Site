import React, { useState } from 'react'
import './Pages.css'
import { BsFillCupHotFill } from 'react-icons/bs';
import { FaHamburger } from 'react-icons/fa';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import FoodCategoryCard from '../Components/FoodCategoryCard'
import FoodItem from '../Components/FoodItem';

export default function Menu() {

  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryClick = (key) => {
    setSelectedCategory(key);
  };

  const foodItems = [
    {
      image: '/images/menu-1.jpg',
      title: 'Platter',
      price: '190',
      disc: 'Ipsum ipsum clita erat amet dolor justo diam'
    },
    {
      image: '/images/menu-2.jpg',
      title: 'Fried Chicken',
      price: '79',
      disc: 'Ipsum ipsum clita erat amet dolor justo diam'
    },
    {
      image: '/images/menu-3.jpg',
      title: 'Fajita Pizza',
      price: '105',
      disc: 'Ipsum ipsum clita erat amet dolor justo diam'
    },
    {
      image: '/images/menu-4.jpg',
      title: 'Kababs',
      price: '95',
      disc: 'Ipsum ipsum clita erat amet dolor justo diam'
    },
    {
      image: '/images/menu-5.jpg',
      title: 'Brakfast Deal',
      price: '165',
      disc: 'Ipsum ipsum clita erat amet dolor justo diam'
    },
    {
      image: '/images/menu-6.jpg',
      title: 'Tikka Fries',
      price: '55',
      disc: 'Ipsum ipsum clita erat amet dolor justo diam'
    },
    {
      image: '/images/menu-7.jpg',
      title: 'Tikka Pizza',
      price: '115',
      disc: 'Ipsum ipsum clita erat amet dolor justo diam'
    },
    {
      image: '/images/menu-8.jpg',
      title: 'Chicken Tikka',
      price: '125',
      disc: 'Ipsum ipsum clita erat amet dolor justo diam'
    }
  ]

  const foodCategpries = [
    {
      icon: <BsFillCupHotFill/>,
      text: 'Popular',
      category: 'Breakfast'
    },
    {
      icon: <FaHamburger/>,
      text: 'Special',
      category: 'Lunch'
    },
    {
      icon: <GiForkKnifeSpoon/>,
      text: 'Lovely',
      category: 'Dinner'
    }
  ]

  return(
    <div className='menu-container'>
      <div className='section-heading' data-aos='fade-up' >
        <div style={{marginRight: '5px'}}></div>
        <p>Food Menu</p>
        <div></div>
      </div>
      <h3 className='main-heading' data-aos='fade-up'>Most Popular Food</h3>
      <div className='foodcategory-card-div'>
        {
          foodCategpries.map( (val, key) => ( 
            <div key={key} onClick={() => handleCategoryClick(key)}>
              <FoodCategoryCard 
                icon={val.icon} 
                text={val.text} 
                category={val.category}
                selected={selectedCategory === key}
              />
            </div>
          ))
        }        
      </div>
      <div className='food-items'>
        {
          foodItems.map( (val, key) => (
          <FoodItem
            key={key}
            image={val.image}
            title={val.title}
            price={val.price}
            disc={val.disc}
          />
        ))
        }
      </div>
    </div>
  )
}
