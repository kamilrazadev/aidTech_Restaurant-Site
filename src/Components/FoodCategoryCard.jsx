import React from 'react'

export default function FoodCategoryCard(props) {
  return (
    <div className={`foodcategory-card ${props.selected ? 'selected' : ''}`}>
        <div  className='foodcategory-icon' data-aos='fade-right' >{props.icon}</div>
        <div data-aos='fade-left'>
            <p>{props.text}</p>
            <h5>{props.category}</h5>
        </div>
    </div>
  )
}
