import React from 'react'

export default function ChefCards(props) {
  return (
    <div className='chef-cards'>
          <img src={props.image} className='chef-img' />
            <h3 className='chef-desgn'>{props.desgn}</h3>
            <p className='chef-name'>{props.name}</p>
          <div className='social-acc'>
            <div>I</div>
            <div>F</div>
            <div>T</div>
          </div>
          <div className='over'></div>
    </div>
  )
}
