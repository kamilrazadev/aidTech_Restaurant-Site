import React from 'react'

export default function FoodItem(props) {
  return (
    <div className='food-item'>
        <div>
            <img src={props.image} className='food-item-img'/>
        </div>
        <div className='food-item-container'>
            <div className='food-info'>
                <h3 className='food-item-title'>{props.title}</h3>
                <h3 className='food-item-price'>{props.price}$</h3>
            </div>
            <div className='food-item-disc'>{props.disc}</div>
        </div>
    </div>
  )
}
