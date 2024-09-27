import React from 'react'
import Item from '../item/Item'
import './RelatedProducts.css'

export default function RelatedProducts({product,category}) {
    let counter=0
  return (
    <div className='relatedProducts'>
        <h1>Telated Products</h1>
        <hr />
        <div className="relatedProducts-item">
            {product.map((item,index)=>{
                
                if(item.category===category && counter<4)
                {  counter++;
                    return <Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            }
            })}
        </div>
    </div>
  )
}
