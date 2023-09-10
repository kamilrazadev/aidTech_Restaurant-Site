import React from 'react'

export default function FoodItem(props) {
  return (
    <div className='food-item'>
        <div className='food-item-img'>
            <img src={props.image} />
        </div>
        <div>
            <div className='food-info'>
                <h3 className='food-item-title'>{props.title}</h3>
                <h3 className='food-item-title'>{props.price}$</h3>
            </div>
            <div className='food-item-disc'>{props.disc}</div>
        </div>
    </div>
  )
}
