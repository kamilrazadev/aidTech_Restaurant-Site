import React from 'react'

export default function FoodCategoryCard(props) {
  return (
    <div className={`foodcategory-card ${props.selected ? 'selected' : ''}`}>
        <div  className='foodcategory-icon'>{props.icon}</div>
        <div>
            <p>{props.text}</p>
            <h5>{props.category}</h5>
        </div>
    </div>
  )
}
