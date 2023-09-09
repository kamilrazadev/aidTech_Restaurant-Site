import React from 'react'

export default function (props) {
  return (
    <div className='about-card'>
        <h1>{props.heading}</h1>        
        <div>
          <p>{props.txtPrimary}</p>
          <p className='about-card-bold-txt'>{props.txtSecondary}</p>
        </div>
    </div>
  )
}
