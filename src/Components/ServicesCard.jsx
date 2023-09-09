import React from 'react'
import './Component.css'


export default function ServicesCard(props) {
  return (
    <div className='services-card'>
        <div className='services-card-icon'>{props.icon}</div>
        <h4 className='services-card-heading'>{props.heading}</h4>
        <p className='services-card-txt'>{props.text}</p>
    </div>
  )
}
