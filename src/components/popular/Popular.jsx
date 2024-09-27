import React from 'react'
import './Popular.css'
import Item from '../item/Item'
import { useSelector } from 'react-redux'
export default function Popular() {
  const {product}=useSelector(state=>state.products)
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="product-item">
            {product.map((item,i)=>{
                return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}
