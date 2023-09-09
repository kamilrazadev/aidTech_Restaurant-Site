import React from 'react'
import { LuChefHat } from 'react-icons/lu';
import './Component.css'


export default function ServicesCard() {
  return (
    <div className='services-card'>
        <LuChefHat className='services-card-icon'/>
        <h4 className='services-card-heading'>Master Chefs</h4>
        <p className='services-card-txt'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
    </div>
  )
}
