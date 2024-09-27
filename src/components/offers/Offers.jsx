import React from 'react'
import './Offers.css'
import exclusive from '../../assets/image/exclusive (1).jfif'
export default function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>EXCLUSIVE</h1>
            <h1>offers for you</h1>
            <p>ONLY ON SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive} alt="exclusive" />
        </div>
    </div>
  )
}
