import React, { useState } from 'react'
import './Pages.css'
import { BsFillCupHotFill } from 'react-icons/bs';
import { FaHamburger } from 'react-icons/fa';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import FoodCategoryCard from '../Components/FoodCategoryCard'
import FoodItem from '../Components/FoodItem';
import FoodItemImg from '../assets/tikka-pizza.jpg'

export default function Menu() {

  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryClick = (key) => {
    setSelectedCategory(key);
  };

  const foodItems = [
    {
      image: {FoodItemImg},
      title: 'Tikka Pizza',
      price: '115',
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
    <div>
      <div className='section-heading'>
        <div style={{marginRight: '5px'}}></div>
        <p>Food Menu</p>
        <div></div>
      </div>
      <h3 className='main-heading'>Most Popular Food</h3>
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
          foodItems.map( () => (
          <FoodItem
            image={FoodItemImg}
            title='Tikka Pizza'
            price='115'
            disc='Ipsum ipsum clita erat amet dolor justo diam'
          />
        ))
        }
      </div>
    </div>
  )
}
