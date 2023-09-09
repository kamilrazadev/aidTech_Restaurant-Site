import React from 'react'

export default function (props) {
  return (
    <div className='about-card' data-aos="fade-up">
        <h1>{props.heading}</h1>        
        <p>{props.txtPrimary}</p>
        <p>{props.txtSecondary}</p>
    </div>
  )
}
