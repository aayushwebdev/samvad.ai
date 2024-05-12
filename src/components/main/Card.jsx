import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Card = (props) => {
  return (
    <div className='card'>
        <p>{props.desc}</p>
        <img src={props.img} alt='' />
    </div>
  )
}

export default Card