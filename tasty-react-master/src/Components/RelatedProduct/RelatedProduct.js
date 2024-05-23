import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assets/data'

const RelatedProduct = () => {
  return (
    <div className='RelatedProduct' >
      <h1> Telated Product</h1>
      <hr />
      <div className='RelatedProduct-item'>
        {data_product.map((item,i)=>{
            return <item key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image}
            new_price={item.new_price} 
            old_price={item.old_price}/>
        })}
      </div>
    </div>

  )
}

export default RelatedProduct
